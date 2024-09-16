var menu_btn = document.querySelector("#nav-part2>i");
var full_scr_nav = document.querySelector("#full-scr-nav");
var flag = 0;

menu_btn.addEventListener("click", function () {
  if (flag == 0) {
    full_scr_nav.style.top = "0%";
    document.querySelector("#nav h2").style.color = "#222";
    document.querySelector("#nav h3").style.color = "#222";
    document.querySelector("#nav i").style.color = "#222";
    flag=1;
  } else {
    full_scr_nav.style.top = "-100%";
    document.querySelector("#nav h2").style.color = "#dadada";
    document.querySelector("#nav h3").style.color = "#dadada";
    document.querySelector("#nav i").style.color = "#dadada";
    flag=0
  }
});
