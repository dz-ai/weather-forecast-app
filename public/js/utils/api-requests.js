
const urlCity = 'https://api.openweathermap.org/data/2.5/weather?';
const urlForecast = 'https://api.openweathermap.org/data/2.5/onecall?';

export async function citySearch (cityName) {
    const response = await fetch('http://localhost:5000/city-search', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
           urlCity,
           cityName,
        }),
    });
    return response.json();
}

export async function foreCastSearch (lat, lon, unit) {
    const response = await fetch('http://localhost:5000/forecast-search', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            urlForecast,
            lat,
            lon,
            unit,
        }),
    });
  return response.json()
}
