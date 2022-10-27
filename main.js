// JavaScript Code?

let inputId = document.getElementById("output");
document.getElementById("btn").addEventListener("click", buttonClick);

function buttonClick() {
  let acronym = document.getElementById("search").value.toUpperCase();

  if (acronym === "NASA") {
    inputId.innerHTML = "Nastional Altermondial Super Acusition";
  } else if (acronym === "LOL") {
    inputId.innerHTML = "Late Osborn Locus";
  } else if (acronym === "FYI") {
    inputId.innerHTML = "Foward Younth Intervention";
  } else if (acronym === "FBI") {
    inputId.innerHTML = "Funded Bank Index";
  } else if (acronym === "BBL") {
    inputId.innerHTML = "Big Black Lantern";
  } else if (acronym === "BBC") {
    inputId.innerHTML = "Big Bold Country";
  } else if (acronym === "IDK") {
    inputId.innerHTML = "Intensly Dull Knife";
  } else if (acronym === "BTW") {
    inputId.innerHTML = "Blunt Tall Wall";
  } else if (acronym === "FAQ") {
    inputId.innerHTML = "Falsly Aquired Quantum-adoms";
  } else if (acronym === "WTF") {
    inputId.innerHTML = "World Famous Fries";
  } else if (acronym === "MF") {
    inputId.innerHTML = "My Friend";
  } else if (acronym === "ASAP") {
    inputId.innerHTML = "Always Super Americanly Popular";
  } else if (acronym === "AKA") {
    inputId.innerHTML = "Anonymous Kind Actor";
  } else if (acronym === "ADHD") {
    inputId.innerHTML = "Alberta Defensive Hostile Deparment";
  } else if (acronym === "CIA") {
    inputId.innerHTML = "Cataclyst Injection Alteration";
  } else {
    inputId.innerHTML = "Acronym Not Found";
  }
}
