const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
];

const bgImage = document.querySelector(".bg");
const chosenImage = images[Math.floor(Math.random() * images.length)];

bgImage.style.background = `url(./img/${chosenImage})`;

