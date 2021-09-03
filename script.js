const redbutton = document.querySelector(".circle1");
const bluebutton = document.querySelector(".circle2");

redbutton.addEventListener("click", moveUp);

function moveUp() {
  console.log(event.target);
  event.target.style.transform = "translate(-100px,-100px)";
}
