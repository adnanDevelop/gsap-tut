gsap.to(".box-one", {
  x: 500,
  duration: 2,
  delay: 1,
  rotate: 360,
  borderRadius: "100%",
  backgroundColor: "purple",
  scale: 1.5,
});
gsap.from(".box-two", {
  x: 500,
  //   y: 200,
  duration: 2,
  delay: 1.2,
  rotate: 360,
  backgroundColor: "blue",
  scale: 0.5,
  borderRadius: "100%",
});

gsap.from("h1", {
  duration: 1,
  delay: 1,
  y: 50,
  opacity: 0,
  stagger: 0.3, // Its accept the negative value too
});
