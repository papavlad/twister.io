const arrow = document.querySelector(".arrow");
const button = document.querySelector("button");

let current = 0;
var circles = 4 * 360;
const obrni = () => {
  const random = Math.floor(Math.random() * 360);
  current = random;
  arrow.style.transition = "3s";
  arrow.style.transform = `translate(-50%, -100%) rotate(${
    current + circles
  }deg)`;
};

const vrati = (random) => {
  random = obrni;
  arrow.style.transition = "0s";
  arrow.style.transform = `translate(-50%, -100%) rotate(${current}deg)`;
};

arrow.ontransitionend = vrati;
button.addEventListener("click", obrni);
