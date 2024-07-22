gsap.from(".box-one", {
  duration: 1,
  delay: 0.5,
  opacity: 0,
  rotate: 360,
  borderRadius: "100%",
  scrollTrigger: {
    trigger: ".box-one",
    scroller: "body",
    // markers: true,
    // scrub: true,
    // scrub: 2,
  },
});

gsap.from(".box-two", {
  duration: 1,
  opacity: 0,
  // delay: 1,
  rotate: 800,
  scale: 0.5,
  y: 100,
  borderRadius: "100%",
  backgroundColor: "white",
  // scrollTrigger: ".box-two", first method using scrollTrigger
  scrollTrigger: {
    trigger: ".box-two",
    scroller: "body",
    markers: true,
    start: "top 60%",
    // end: "top 20%",
    // scrub: true,
    scrub: 2,
    pin: true,
  },
});

gsap.to(".page-four h1", {
  // duration: 2,
  transform: "translateX(-250%)",
  // fontSize: "50vw",
  scale: 1.9,
  scrollTrigger: {
    trigger: ".page-four",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -150%",
    scrub: 2,
    pin: true,
  },
});
