// To navigate between pages
function togglePage(id) {
    var pages = document.getElementsByTagName("page");
    for (var i = 0; i < pages.length; i++) {
        if (pages[i].id == id) {
            pages[i].classList.add("active");
            pages[i].classList.remove("inactive");
        } else {
            pages[i].classList.add("inactive");
            pages[i].classList.remove("active");
        }
    }
}

