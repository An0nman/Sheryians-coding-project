//menu
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

var tl=gsap.timeline();

tl.from("#page1 h1",{
  opacity:0,
  y:60,
  duration:0.6,
})
.from("#page1 h2",{
  opacity:0,
  y:50,
  duration:0.5,
  delay:-0.2,
})
.from("#page1 h3",{
  opacity:0,
  y:50,
  duration:0.5,
  delay:-0.2,
})
gsap.to("#page2 img",{
  scale:.98,
  scrollTrigger:{
    trigger:"#page2 img",
    scroll:"body",
    // markers:true,
    start:"top 80%",
    end:"top 0%",
    scrub:3
  }
})
gsap.from("#page2 h1",{
  rotateX:"-90deg",
  opacity:0,
  scrollTrigger:{
    trigger:"#page2 h1",
    scroller:"body",
    markers:true,
    start:"top 70%",
    end:"top 60%",
    scrub:1,
  }
})