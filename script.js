

function show() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });



  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
show();



document.querySelector("#menu>h1").addEventListener("click", function () {
  document.querySelector("#fullScreenNav").style.left = 0;

})

document.querySelector("#back").addEventListener("click", function () {
  document.querySelector("#fullScreenNav").style.left = "-100vw";

})


gsap.to("#right img", {
  y: "-100vh",
  duration: 5,
  repeat: -1,
  rotate: "360deg",
  ease: Power0.easeNone,
})


gsap.from("#left", {
  onStart: function () {
    $('#left>h2').textillate({ in: { effect: 'fadeInUp' } });
  }
})



var tl = gsap.timeline();

tl.from("#loader>h1", {
  y: 50,
  opacity: 0,
  duration: 1.2,
})
tl.to("#loader", {
  y: "-100%",
  duration: 0.5,
})


gsap.from("#c1",
  {
    scrollTrigger: {
      trigger: "#c1",
      scroller: "#main",
    
      start: "top 80%",
      end: "bottom 10%",
      scrub: true
    },
    opacity: 0,
    rotateX: "-60deg",
    duration: 1

  })

gsap.from("#c2",
  {
    scrollTrigger: {
      trigger: "#c2",
      scroller: "#main",
     
      start: "top 80%",
      end: "bottom 10%",
      scrub: 2
    },
    opacity: 0,
    rotateX: "-60deg",
    duration: 1

  })
gsap.from("#c3",
  {
    scrollTrigger: {
      trigger: "#c3",
      scroller: "#main",
    
      start: "top 80%",
      end: "bottom 10%",
      scrub: 2
    },
    opacity: 0,
    rotateX: "-60deg",
    duration: 1

  })
gsap.from("#c4",
  {
    scrollTrigger: {
      trigger: "#c4",
      scroller: "#main",
    
      start: "top 80%",
      end: "bottom 10%",
      scrub: true
    },
    opacity: 0,
    rotateX: "-60deg",
    duration: 1

  })
gsap.from("#para1>p", {
  scrollTrigger: {
    trigger: "#para1>p",
    scroller: "#main",
    scrub: true
  },
  opacity: 0,
  y: 30,
  duration: 2
})
gsap.from("#para1>h2", {
  scrollTrigger: {
    trigger: "#para1>h2",
    scroller: "#main",
    scrub: true
  },
  opacity: 0,
  y: 30,
  duration: 2
})

gsap.from("#para2>p", {
  scrollTrigger: {
    trigger: "#para2>p",
    scroller: "#main",
    scrub: true
  },
  opacity: 0,
  y: 30,
  duration: 2
})


gsap.to("#lastpage video", {

scrollTrigger:{
  trigger:"video",
  scrub:true,
  scale:1

},
y:"10",
opacity:0.5,
duration:1

})

gsap.to("#fullnav", {

  scrollTrigger: {
    trigger: "#fullnav",
    scroller: "#main",
    scrub: true
  },
  y: "10",
  opacity: 0.5,
  duration: 2
})