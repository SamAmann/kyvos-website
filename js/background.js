// Construction of the dictionary
// Select the table body element
const tbody = document.querySelector('#dictionary-table tbody');

// Fetch the JSON data from the file and parse it into an array of objects
fetch('../json/dictionary-terms.json')
    .then(response => response.json())
    .then(data => {
        // Loop through each object in the array
        data.forEach(term => {
            // Create a new row element
            const row = document.createElement('tr');

            // Create a new cell element for each data item in the object and add it to the row
            const acrCell = document.createElement('td');
            acrCell.textContent = term.acr;
            row.appendChild(acrCell);

            const termEnCell = document.createElement('td');
            termEnCell.textContent = term.term_en;
            row.appendChild(termEnCell);

            const definitionEnCell = document.createElement('td');
            definitionEnCell.textContent = term.definition_en;
            row.appendChild(definitionEnCell);

            const termFrCell = document.createElement('td');
            termFrCell.textContent = term.term_fr;
            row.appendChild(termFrCell);

            const definitionFrCell = document.createElement('td');
            definitionFrCell.textContent = term.definition_fr;
            row.appendChild(definitionFrCell);


            // Append the new row to the table body

            tbody.appendChild(row);
        });
    })
    .catch(error => console.error(error));

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
        } else {
            pages[i].classList.add("inactive");
            pages[i].classList.remove("active");
        }
    }
    for (var i = 0; i < btnNav.length; i++) {
        if (btnNav[i].id == "btn-" + id) {
            btnNav[i].classList.add("active");
            btnNav[i].classList.remove("inactive");
        } else {
            btnNav[i].classList.add("inactive");
            btnNav[i].classList.remove("active");
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
        btnToTop.style.display = "block";
    } else {
        btnToTop.style.display = "none";
    }
}


// When the user clicks on the button, scroll to the top of the document
function scrollToElement(id) {
    var target = document.getElementById(id);
    var targetPosition = target?.offsetTop;
    window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
    });
}

// Mobile menu management
const btnMobileMenu = document.getElementById("btn-mobile-menu");
const mobileMenu = document.querySelector("nav");
const menuIcon = document.querySelector("#btn-mobile-menu img");


// @ts-ignore
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

const btnNavElements = document.querySelectorAll(".btn-nav");

btnNavElements.forEach((btn) => {
    btn.addEventListener("click", function () {
        closeMobileMenu();
    });
});
