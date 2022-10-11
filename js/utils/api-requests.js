
const urlCity = 'https://api.openweathermap.org/data/2.5/weather?';
const urlForecast = 'https://api.openweathermap.org/data/2.5/onecall?';

export async function citySearch (cityName) {
   const response = await fetch(urlCity + `q=${cityName}&appid=b5e0511eee65e6ccbcce8d7662f6f9c2`);
    return await response.json()
}

export async function foreCastSearch (lat, lon, unit) {
  const response = await fetch(urlForecast + `lat=${lat}&lon=${lon}&units=${unit}&appid=b5e0511eee65e6ccbcce8d7662f6f9c2`);
  return response.json()
}