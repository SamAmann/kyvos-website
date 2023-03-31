// To navigate between pages
function navToPage(id) {
    var pages = document.getElementsByTagName("page");
    var btnNav = document.getElementsByClassName("btn-nav");
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

// To the Top button logic, called after the page is loaded
document.addEventListener("DOMContentLoaded", function () {
    window.onscroll = function () {
        var topButton = document.getElementById("topButton");
        // When the user scrolls down from the top of the document, show the button
        window.onscroll = function () { scrollFunction() };
        console.log(screenX)
    };
    function scrollFunction() {
        var showButtonDistance = 800;
        if (document.body.scrollTop > showButtonDistance || document.documentElement.scrollTop > showButtonDistance) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
    }
});
// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}


