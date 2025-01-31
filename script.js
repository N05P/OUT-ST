function init(){
  gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

}

init();

let tl=gsap.timeline();

tl.from("#front h1",{
  y:20,
  opacity:0,
  stagger:0.2,
})
tl.from("#page1 #ab h3",{
  y:20,
  opacity:0,
  stagger:0.2
})
tl.from("#page2 video",{
  opacity:1,
  y:20,
})

let tl1 = gsap.timeline({
  scrollTrigger:{
    trigger:"#page1 #front",
    scroller:"#main",
    start:"top 20%",
    end:"top 0%",
    scrub:2
}
});

tl1.to("#front #t2",{
  x:100,
},"anim")
tl1.to("#front #t1",{
  x:"-100"
},"anim")
tl1.to("#front #t3",{
  x:"-100"
},"anim")


let tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:"#page1 #ab",
    scroller:"#main",
    start:"top 20%",
    end:"top 0%",
    scrub:2
}
});
tl2.to("#page2 video",{
  width:"90%"
})
tl2.to("#main",{
  backgroundColor:"#fff"
})

