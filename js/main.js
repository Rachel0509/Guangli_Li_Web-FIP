//nav
var bars = document.getElementById("bars");
var nav = document.getElementById("nav");

bars.addEventListener('click', function () {

    var value = nav.style.display;
    if (value == 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
});




