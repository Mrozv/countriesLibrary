export function clear() {
  const containers = document.querySelectorAll(".innerContainer");

  containers.forEach((container) => {
    const containerDivs = container.querySelectorAll("div");
    containerDivs.forEach((element) => {
      element.remove();
    });
  });
}

export function simpleDisplayFunction(title, data, DOMElement) {
  const infoElement = document.createElement("div");
  infoElement.textContent = `${title}: ${data}`;
  DOMElement.appendChild(infoElement);
}

export function displayNation(element, DOMElement) {
  const mainText = document.createElement("div");
  mainText.classList.add("mainText");

  const countrySymbols = document.createElement("div");
  countrySymbols.classList.add("countrySymbols");

  const countryFlag = document.createElement("div");
  countryFlag.classList.add("countryFlag");
  const flagImg = document.createElement("img");
  flagImg.setAttribute("src", `${element.flags.png}`);

  const countryCoatofArms = document.createElement("div");
  countryCoatofArms.classList.add("countryCoatofArms");

  calculateSize(
    element.flags.png,
    element.coatOfArms.png,
    countryFlag,
    countryCoatofArms
  );

  countryFlag.style.backgroundImage = `URL(${element.flags.png})`;
  countryCoatofArms.style.backgroundImage = `URL(${element.coatOfArms.png})`;

  countrySymbols.appendChild(countryFlag);
  countrySymbols.appendChild(countryCoatofArms);

  mainText.textContent = `Name: ${element.name.common}`;

  DOMElement.appendChild(countrySymbols);
  DOMElement.appendChild(mainText);
}

export function calculateSize(
  flagURL,
  coatofarmsURL,
  DOMElementFlag,
  DOMElementCoatofArms
) {
  let img = new Image();
  img.src = flagURL;
  img.onload = function () {
    DOMElementFlag.style.width = img.width + "px";
    DOMElementFlag.style.height = img.height + "px";
  };

  let img2 = new Image();
  img2.src = coatofarmsURL;
  img2.onload = function () {
    DOMElementCoatofArms.style.width =
      DOMElementCoatofArms.offsetHeight * (img2.width / img2.height) + "px";
    DOMElementCoatofArms.style.height = img.height + "px";
  };
}

export function displayAllCountries(data) {
  let countries = {
    A: [],
    B: [],
    C: [],
    D: [],
    E: [],
    F: [],
    G: [],
    H: [],
    I: [],
    J: [],
    K: [],
    L: [],
    M: [],
    N: [],
    O: [],
    P: [],
    Q: [],
    R: [],
    S: [],
    T: [],
    U: [],
    V: [],
    W: [],
    X: [],
    Y: [],
    Z: [],
  };
  const countriesObjects = data;

  countriesObjects.forEach((element) => {
    const countryLetter = element.name.common[0];
    if (countryLetter in countries) {
      countries[countryLetter].push(element);
    }
  });
  return countries;
}

export function displayCurrency(data, DOMElement) {
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const info = data[key];
      const infoElement = document.createElement("div");
      infoElement.textContent = `Currency: ${info.name}`;
      DOMElement.appendChild(infoElement);
    }
  }
}

export function displayTimezones(data, DOMElement) {
  const title = document.createElement("div");
  title.textContent = "Timezone/s: ";
  DOMElement.appendChild(title);

  data.forEach((element) => {
    const infoElement = document.createElement("div");
    infoElement.textContent = element;
    title.appendChild(infoElement);
  });
}

export function displayContinents(data, DOMElement) {
  const infoElement = document.createElement("div");
  infoElement.textContent = "Continent/s:";
  DOMElement.appendChild(infoElement);

  data.forEach((element) => {
    const continent = document.createElement("div");
    continent.textContent = element;
    infoElement.appendChild(continent);
  });
}
