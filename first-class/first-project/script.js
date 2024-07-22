const tl = gsap.timeline();

tl.from("h2", {
  y: -20,
  opacity: 0,
  duration: 0.6,
  delay: 0.5,
});

tl.from(".links", {
  y: -15,
  opacity: 0,
  duration: 0.4,
  stagger: 0.3,
});

tl.from(".title", {
  y: -30,
  opacity: 0,
  duration: 0.6,
});
