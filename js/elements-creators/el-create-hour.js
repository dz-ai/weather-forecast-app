
export function creatElHourly (data, tempSymbol) {
    return `
    <div class="data-content">
                    <div>${new Date(data.dt * 1000).toDateString()}</div>
                    <div>${new Date(data.dt * 1000).getHours()}:00</div>
                    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="icon" width="60" height="auto">
                    <div>${data.weather[0].description}</div>
                    <div>Temp: ${data.temp} ${tempSymbol}</div>
                    <div>Feels Like: ${data.feels_like} ${tempSymbol}</div>
                    <div>Humidity: ${data.humidity}%</div>
                    <div>Wind: ${(data.wind_speed*60*60/1000).toFixed(2)} km/hr</div>
                    <div>Visibiliyt: ${data.visibility/1000} km</div>
                </div>
    `
}