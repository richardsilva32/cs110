/* 
Student Name: Richard Silva
File Name: script.js
Date: 5/8/26
*/

/* Hamburger menu function */
function hamburger() {

    var menu = document.getElementById("menu-links");

    if (menu.style.display === "block") {

        menu.style.display = "none";

    } else {

        menu.style.display = "block";

    }

}