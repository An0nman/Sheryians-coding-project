gsap.set(".a", { opacity: 0, y: 10 });
gsap.set("#right>img", { opacity: 0, y: 10,scale:1.6 });
var tl = gsap.timeline();

tl.from("#left", {
  width: 0,
  duration: 1.5,
  ease: Expo.easeInOut,
}).from("#right", {
  width: 0,
  duration: 1.5,
  ease: Expo.easeInOut,
})
.to(".a",{
    delay:-2,
    stagger:.1,
    opacity:1,
    y:0,
    duration:1.5,
    ease:Expo.easeInOut,
})
.to("#right>img",{
    delay:-1,
    opacity:1,
    y:0,
    scale:1,
    duration:1.6,
    ease:Expo.easeInOut
})
