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

//page 1,2 animation
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
gsap.to("#page2 h1",{
  rotateX:0,
  scrollTrigger:{
    trigger:"#page2 h1",
    scroller:"body",
    // markers:true,
    start:"top 58%",
    end:"top 50%",
    scrub:2,
  }
})

//one sliding animation
var slide1h1= document.querySelectorAll("#page6 .p6-slide1-h1 h1");
slide1h1.forEach(function(elem){
  gsap.to(elem,{
    transform:"translatex(-100%)",
    duration:4,
    scrollTrigger:{
      trigger:"#page6",
      scroll:"body",
      scrub:3,
    }
  })
})
var slide2h1= document.querySelectorAll("#page6 .p6-slide2-h1 h1");
slide2h1.forEach(function(elem){
  gsap.to(elem,{
    transform:"translatex(0%)",
    duration:4,
    scrollTrigger:{
      trigger:"#page6",
      scroll:"body",
      scrub:3,
    }
  })
})

//question part 
document.querySelector("#p7e1").addEventListener("mousemove",function(details){
  document.querySelector("#p7e1 img").style.opacity=1;
  document.querySelector("#p7e1 img").style.left=`${details.x-200}px`;
  document.querySelector("#p7e1 img").style.top=`${details.y-530}px`;
})
document.querySelector("#p7e1").addEventListener("mouseleave",function(details){
  document.querySelector("#p7e1 img").style.opacity=0;
})
//question part 
document.querySelector("#p7e2").addEventListener("mousemove",function(details){
  document.querySelector("#p7e2 img").style.opacity=1;
  document.querySelector("#p7e2 img").style.left=`${details.x-200}px`;
  document.querySelector("#p7e2 img").style.top=`${details.y-530}px`;
})
document.querySelector("#p7e2").addEventListener("mouseleave",function(details){
  document.querySelector("#p7e2 img").style.opacity=0;
})