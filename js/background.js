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

// Function to toggle the display of an element
function toggleDisplay(id) {
    var element = document.getElementById(id);
    if (element.classList.contains("active")) {
        element.classList.remove("active", "animation-top");
        element.classList.add("animation-top-reverse");
        scrollToElement(element);
        setTimeout(function () {
            element.classList.add("inactive");
        }, 500); // adjust the timing to match the animation duration
    } else {
        element.classList.remove("inactive", "animation-top-reverse");
        element.classList.add("animation-top");
        scrollToElement(element);
        setTimeout(function () {
            element.classList.add("active");
        }, 800); // adjust the timing to match the animation duration
    }
}

// Popup management
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


//open the popup and sets the popup-overlay active
function openPopup(id) {
    var popup = document.getElementById(id);
    popup.classList.add("active");
    var popupOverlay = document.getElementById("popup-overlay");
    popupOverlay.classList.add("active");

}

//close the popup
function closePopup(id) {
    var popup = document.getElementById(id);
    popup.classList.remove("active");
    var popupOverlay = document.getElementById("popup-overlay");
    popupOverlay.classList.remove("active");
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
    var targetPosition = (target?.offsetTop);
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
