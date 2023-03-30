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

