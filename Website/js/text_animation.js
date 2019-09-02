anime({
    targets: '.first-name',
    translateX: -120,
    easing: "easeInOutExpo",
    opacity: [0,1],
    duration: 600
});
anime({
    targets: '.last-name',
    translateX: 120,
    easing: "easeInOutExpo",
    opacity: [0,1],
    duration: 600
});
anime({
    targets: '.line',
    scaleX: [0,1],
    duration: 700,
    ease: 'easeInOutExpo'
});
anime({
    targets: '.email',
    ease: 'easeInOutExpo',
    opacity: [0,1],
    delay: 150,
    duration: 1000,
    translateX: -15,
    translateY: 100
})
anime({
    targets: '.messenger',
    ease: 'easeInOutExpo',
    opacity: [0,1],
    delay: 250,
    duration: 1000,
    translateX: 15,
    translateY: 100
})
anime({
  targets: '.circle-dark-dashed',
  rotateZ: 360,
  duration: 20000,
  easing: "linear",
  loop: true
});
anime({
  targets: '.small-dark-dashed',
  rotateZ: -360,
  duration: 15000,
  easing: "linear",
  loop: true
});