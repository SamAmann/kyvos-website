//Set the page to full screen
function fullScreen() {
    var element = document.documentElement;
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        /* Safari */
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        /* IE/Edge */
        element.msRequestFullscreen();
    }
}

//Exit full screen
function exitFullScreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        /* IE/Edge */
        document.msExitFullscreen(); 
    }
}

// // Fetch the Header and Footer
// const headerDiv = document.querySelector('#header');
// fetch('/pages/header.html')
//     .then(response => response.text())
//     .then(data => {
//         headerDiv.innerHTML = data;
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });

function toggleDisplay(id, animation = "") {
    var element = document.getElementById(id);
    var animationReverse = "";
    if (animation !== "") {
        animationReverse = animation + "-reverse";
    } else {
        animationReverse = "";
    }
    if (element.classList.contains("active")) {
        element.classList.remove("active");
        if (animation !== "") {
            if (element.classList.contains(animation)) {
                element.classList.remove(animation);
            }
            element.classList.add(animationReverse);
            element.addEventListener("animationend", function () {
                element.classList.add("inactive");
                element.classList.remove(animationReverse);
                element.removeEventListener("animationend", arguments.callee);
            });
        } else {
            element.classList.add("inactive");
        }
    } else {
        element.classList.remove("inactive");
        if (animation !== "") {
            if (element.classList.contains(animationReverse)) {
                element.classList.remove(animationReverse);
            }
            element.classList.add(animation);
            element.addEventListener("animationend", function () {
                element.classList.add("active");
                element.classList.remove(animation);
                element.removeEventListener("animationend", arguments.callee);
            });
        } else {
            element.classList.add("active");
        }
    }
}







// Popup management

// Listen when user clicks outside of the popup, 
// close it unless the popup has the class "outside-click-no-close"
document.addEventListener('click', function (event) {
    var popups = document.getElementsByClassName("popup"); 

    for (var i = 0; i < popups.length; i++) {
        if (
            event.target !== popups[i] &&
            !popups[i].contains(event.target) &&
            popups[i].classList.contains("active") &&
            event.target.closest('.open-popup') == null &&
            !popups[i].classList.contains("outside-click-no-close")
        ) {
            closePopup(popups[i].id);
        }
    }
});


// open the popup
// sets the popup-overlay active
function openPopup(id) {
    var popup = document.getElementById(id);
    var popupOverlay = document.getElementById("popup-overlay");
    popup.classList.add("active");
    popupOverlay.classList.add("active");

    if (popup.classList.contains("hide-header")) {
        hideHeader();
    }
    if (popup.classList.contains("hide-footer")) {
        hideFooter();
    }
}

//close the popup
// sets the popup-overlay inactive
function closePopup(id) {
    var popup = document.getElementById(id);
    var popupOverlay = document.getElementById("popup-overlay");
    popup.classList.remove("active");
    popupOverlay.classList.remove("active");
    if (popup.classList.contains("hide-header")) {
        showHeader();
    }
    if (popup.classList.contains("hide-footer")) {
        showFooter();
    }
}

// Inactive the header
function hideHeader() {
    var header = document.getElementById("header");
    header.classList.add("inactive");
}

// Active the header
function showHeader() {
    var header = document.getElementById("header");
    header.classList.remove("inactive");
}

// Inactive the footer
function hideFooter() {
    var footer = document.getElementById("footer");
    footer.classList.add("inactive");
}

// Active the footer
function showFooter() {
    var footer = document.getElementById("footer");
    footer.classList.remove("inactive");
}


// To navigate between pages
function navToPage(id) {
    var clickedBtn = document.getElementById("btn-" + id);
    var pages = document.getElementsByTagName("page");
    var btnNav = document.getElementsByClassName("btn-nav");

    if (clickedBtn.classList.contains("disabled")) {
        return;
    }

    for (var i = 0; i < pages.length; i++) {
        if (pages[i].id == `page-${id}`) {
            pages[i].classList.add("active");
            pages[i].classList.remove("inactive");
            scrollToElement('header');
        } else {
            pages[i].classList.add("inactive");
            pages[i].classList.remove("active");
        }
    }
    for (var i = 0; i < btnNav.length; i++) {
        if (btnNav[i].id == "btn-" + id) {
            btnNav[i].classList.add("selected");
            btnNav[i].classList.remove("unselected");
        } else {
            btnNav[i].classList.add("unselected");
            btnNav[i].classList.remove("selected");
        }
    }
}

window.onscroll = function () {
    showTopBtn();
};

// When the user scrolls down 800px from the top of the document, show the button
function showTopBtn() {
    var btnToTop = document.getElementById("btnToTop");
    var showButtonDistance = 800;

    if (
        document.body.scrollTop > showButtonDistance ||
        document.documentElement.scrollTop > showButtonDistance
    ) {
        btnToTop.style.display = "flex";
    } else {
        btnToTop.style.display = "none";
    }
}


// When the user clicks on the button, scroll to the element
function scrollToElement(id) {
    var target = document.getElementById(id);
    var targetPosition = (target?.offsetTop) - 100;
    window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
    });
}

// Mobile menu management
//Check first if the element exists, if it exists, creates the const

if (document.getElementById("btn-mobile-menu")) {
    const btnMobileMenu = document.getElementById("btn-mobile-menu");
    const mobileMenu = document.querySelector("nav");
    const menuIcon = document.querySelector("#btn-mobile-menu img");

    btnMobileMenu.addEventListener("click", function () {
        mobileMenu.classList.toggle("open");
        if (mobileMenu.classList.contains("open")) {
            menuIcon.src = "../img/icons/cross.svg";
            btnMobileMenu.focus();
        } else {
            menuIcon.src = "../img/icons/burger-menu.svg";
        }
    });

    function closeMobileMenu() {
        mobileMenu.classList.remove("open");
        menuIcon.src = "../img/icons/burger-menu.svg";
    }

    // Closes mobile menu when user clicks outside of the menu
    document.addEventListener("mousedown", function (event) {
        if (
            !mobileMenu.contains(event.target) &&
            !btnMobileMenu.contains(event.target)
        ) {
            closeMobileMenu();
        }
    });
}

const btnNavElements = document.querySelectorAll(".btn-nav");

btnNavElements.forEach((btn) => {
    btn.addEventListener("click", function () {
        closeMobileMenu();
    });
});
