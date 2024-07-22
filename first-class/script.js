gsap.to(".box-one", {
  x: 500,
  duration: 2,
  delay: 1,
  rotate: 360,
  borderRadius: "100%",
  backgroundColor: "purple",
  scale: 1.5,
  repeat: -1, // if we want to repeat it multiple time then we use this it accept negative value too
  yoyo: true, //if we want inifinite movement
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

// In this video i will learn about time line
const tl = gsap.timeline();

tl.to(".box-three", {
  x: 500,
  duration: 1,
  delay: 1,
  rotate: 360,
  scale: 0.5,
  borderRadius: "100%",
});

tl.to(".box-four", {
  x: 500,
  duration: 1.3,
  rotate: 360,
  scale: 0.5,
  borderRadius: "100%",
});

tl.to(".box-five", {
  x: 500,
  duration: 1.5,
  rotate: 360,
  scale: 0.5,
  borderRadius: "100%",
});
