"use strict"
const animation = document.querySelector(".preload-animation-wrapper");
const body = document.querySelector("body");

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

setTimeout(() => {
    animation.style.opacity = 0;
    body.style.overflowY = "scroll";
    setTimeout(() => {
        animation.style.display = "none";         
    }, 2500)
}, 2500);


