import { clear } from "./displayFunctions.js";
import { loadCard } from "./loadCard.js";
import { loadLibrary } from "./loadLibrary.js";

const input = document.querySelector(".name");
const sendBtn = document.querySelector(".send");

document.addEventListener("DOMContentLoaded", () => {
  loadLibrary();
});

sendBtn.addEventListener("click", () => {
  clear();

  const countryName = input.value;
  loadCard(countryName);
});
