
export function creatElDaly(data, tempSymbol) {
    return `
    <div class="data-content">
                <div>${new Date(data.dt * 1000).toDateString()}</div>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="icon" width="60" height="auto" alt="icon">
                <div>${data.weather[0].description}</div>
                <div>Temp Morning: ${data.temp.morn} ${tempSymbol}</div>
                <div>Temp Day: ${data.temp.day} ${tempSymbol}</div>
                <div>Temp Evening: ${data.temp.eve} ${tempSymbol}</div>
                <div>Max Temp: ${data.temp.max} ${tempSymbol}</div>
                <div>Min Temp: ${data.temp.min} ${tempSymbol}</div>
                <div>Humidity: ${data.humidity}%</div>
                <div>Wind: ${(data.wind_speed*60*60/1000).toFixed(2)} km/hr</div>
            </div>
    `
}

