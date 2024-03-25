const URL = "https://restcountries.com/v3.1/all";

export function fetchData() {
  try {
    const data = fetch(URL).then((response) => {
      return response.json();
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}
