gsap.from("#page1 #box",{
  scale:2,
  opacity:0,
  duration:1,
  delay:1,
})
gsap.from("#page2 #box",{
  scale:2,
  rotate:360,
  opacity:0,
  duration:1,
  delay:.5,
  scrollTrigger:{
    trigger: "#page2 #box",
    scroller:"body",
    markers:true,
    start:"top 70%",
    end:"top 20%",
    scrub:1,
    // pin:true,
  }
})
gsap.from("#page3 #box",{
  scale:0.5,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger: "#page3 #box",
    scroller:"body",
    // markers:true,
    start:"top 50%",
  }
})