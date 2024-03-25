import {
  simpleDisplayFunction,
  displayCurrency,
  displayTimezones,
  displayNation,
  displayContinents,
} from "./displayFunctions.js";
import { fetchData } from "./api.js";
import { clear } from "./displayFunctions.js";

const economicContainer = document
  .querySelector("#economicContainer")
  .querySelector(".innerContainer");
const communicationContainer = document
  .querySelector("#communicationContainer")
  .querySelector(".innerContainer");
const demographyContainer = document
  .querySelector("#demographyContainer")
  .querySelector(".innerContainer");
const geographyContainer = document
  .querySelector("#geographyContainer")
  .querySelector(".innerContainer");
const symbolsContainer = document
  .querySelector("#symbolsContainer")
  .querySelector(".innerContainer");

export function loadCard(countryName) {
  fetchData().then((countries) => {
    countries.forEach((element) => {
      if (countryName === element.name.common) {
        clear();
        console.log(element);

        displayNation(
          element,
          document
            .querySelector("#countryContainer")
            .querySelector(".innerContainer")
        );
        simpleDisplayFunction("Capital", element.capital, geographyContainer);
        simpleDisplayFunction(
          "Population",
          element.population,
          demographyContainer
        );
        simpleDisplayFunction(
          "Driving side",
          element.car.side,
          communicationContainer
        );
        simpleDisplayFunction("cca2", element.cca2, symbolsContainer);
        simpleDisplayFunction("cca3", element.cca3, symbolsContainer);
        simpleDisplayFunction("ccn3", element.ccn3, symbolsContainer);
        simpleDisplayFunction("cioc", element.cioc, symbolsContainer);
        simpleDisplayFunction("fifa", element.fifa, symbolsContainer);
        simpleDisplayFunction("flag", element.flag, symbolsContainer);
        displayCurrency(element.currencies, economicContainer);
        displayTimezones(element.timezones, geographyContainer);
        displayContinents(element.continents, geographyContainer);
        simpleDisplayFunction("Region", element.region, geographyContainer);
      }
    });
  });
}
