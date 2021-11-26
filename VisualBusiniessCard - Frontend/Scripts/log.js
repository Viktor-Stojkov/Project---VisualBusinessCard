let navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";

}
var x = document.getElementById('login');
var y = document.getElementById('register');
var z = document.getElementById('btn');

function register() {
    x.style.left = '-600px';
    y.style.left = '-25px';
    z.style.left = '110px';
}

function login() {
    x.style.left = '-15px';
    y.style.left = '450px';
    z.style.left = '0px';
}

var modal = document.getElementById('login-form');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}