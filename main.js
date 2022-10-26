// JavaScript Code
let inputId = document.getElementById("output");
let searchId = document.getElementById("search");

document.getElementById("bnt").addEventListener("click", buttonClick);

function buttonClick() {
  if (searchId === "Nasa") {
    inputId.innerHTML = "Nastional altermondial super acusition";
  }
}
