gsap.from(".box-one", {
  duration: 1,
  delay: 0.5,
  opacity: 0,
  rotate: 360,
  borderRadius: "100%",
});

gsap.from(".box-two", {
  duration: 1,
  opacity: 0,
  // delay: 1,
  rotate: 360,
  scale: 0.5,
  borderRadius: "100%",
  backgroundColor: "white",
  // scrollTrigger: ".box-two", first method using scrollTrigger
  scrollTrigger: {
    trigger: ".box-two",
    scroller: "body",
    markers: true,
  },
});
