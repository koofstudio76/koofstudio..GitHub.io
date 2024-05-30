
gsap.registerPlugin("ScrollTrigger");



 

  gsap.to(".box1", {
     scrollTrigger: {
    trigger: ".box1",
    start: "top 325%",
    end: "center  85%",
    scrub:4,   
     },
     r:759,
  y:211, 
     scale:0.8,
     x:59,
     duration:1,
    });
   gsap.to(".box2", {
      scrollTrigger: {
     trigger: ".box2",
     start: "top 255%",
     end: "bottom 65%",
     scrub:4,   
      },
      r:459,
   
      scale:2.8,
      x:-759,
      duration:2,
     });
     gsap.to("#shape1", {
      scrollTrigger: {
     trigger: "#shape1",
     start: "top 25%",
     end: "bottom 55%",
     scrub:1,   
      },
      r:0,
      scaleX:2,
      duration:2,
     });

     gsap.to(".mask", {r:959,scale:1.6, duration:2,});
   