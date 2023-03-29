// Onpageload Get all section of document, hide the .inactive and show the .active
window.onload = function () {
    var sections = document.getElementsByTagName("section");
    for (var i = 0; i < sections.length; i++) {
        if (sections[i].className == "inactive") {
            sections[i].style.display = "none";
        } else {
            sections[i].style.display = "block";
        }
        console.log(sections);
    }
}

// Function that show the called section and hide the others
function toggleSection(id) {
    var sections = document.getElementsByTagName("section");
    for (var i = 0; i < sections.length; i++) {
        if (sections[i].id == id) {
            sections[i].style.display = "block";
        } else {
            sections[i].style.display = "none";
        }
    }
}