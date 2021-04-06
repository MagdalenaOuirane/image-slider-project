// create an array of image sources;
let images = ["image1.png", "image2.png", "image3.png", "image4.png"];

let active = 0;

const container = document.querySelector("#canvas");
console.log(container);

container.style.background = `url('./images/${images[1]}')`;

let arrowBtns = document.querySelectorAll(".arrow");

arrowBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {

    if (e.target.id === "left") {
      active--;

      if (active < 0) {
        active = images.length - 1;
      }
      container.style.background = `url('./images/${images[active]}')`;
    } else if (e.target.id === "right") {
      active++;

      if (active === images.length) {
        active = 0;
      }
      container.style.background = `url('./images/${images[active]}')`;
    }
  });
});
