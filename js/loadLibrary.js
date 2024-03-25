import { fetchData } from "./api.js";
import { displayAllCountries } from "./displayFunctions.js";
import { clear } from "./displayFunctions.js";
import { loadCard } from "./loadCard.js";

const displayCountries = document.querySelector(".displayCountries");

export function loadLibrary() {
  fetchData().then((data) => {
    const countries = displayAllCountries(data);

    for (const key in countries) {
      const title = document.createElement("div");
      title.classList.add("listTitle");
      title.textContent = key;

      const countriesContainer = document.createElement("div");
      countriesContainer.classList.add("countriesContainer");
      countriesContainer.append(title);
      countries[key].forEach((e) => {
        const element = document.createElement("div");
        element.classList.add("countryContainer");
        element.textContent = e.name.common;
        element.addEventListener("click", () => {
          clear();
          loadCard(element.textContent);
          document.querySelector("body").scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
        countriesContainer.append(element);
      });

      displayCountries.appendChild(countriesContainer);
    }
  });
}
