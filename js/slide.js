"use strict";window.addEventListener("DOMContentLoaded",(function(){var e=1,t=document.querySelector(".prev"),n=document.querySelector(".next"),c=document.querySelectorAll(".slide");function l(t){t>c.length&&(e=1),t<1&&(e=c.length),c.forEach((function(e){e.style.display="none"})),c[e-1].style.display="flex"}t.addEventListener("click",(function(t){t.preventDefault(),l(e-=1)})),n.addEventListener("click",(function(t){t.preventDefault(),l(e+=1)})),l(e)}));