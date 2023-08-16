export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "1403c17ad1mshe1fea306686d6d3p11b77cjsn641cd2fe7786",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    {
      headers: headers,
    }
  );
  const result = await response.json();

  return result;
}
