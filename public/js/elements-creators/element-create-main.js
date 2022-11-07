
export function elCreator (data, cityName, tempSymbol) {
        return `
    <section id="title">
    <h2>${cityName}</h2>
    <div>coordinats: ${data.lat} , ${data.lon}</div>
    </section>
    
    <div id="result">
    
    <div id="current-hour-div">
    
    <section id="current">
            <h3>Current Weather</h3>

            <div>Date: ${new Date(data.current.dt * 1000).toDateString()}</div>
            <img src="https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png" alt="icon">
            <p>${data.current.weather[0].description}</p>
            <div>Temp: ${data.current.temp} ${tempSymbol}</div>
            <div>Feels Like: ${data.current.feels_like} ${tempSymbol}</div>
            <div>Humidty: ${data.current.humidity}%</div>
            <div>Wind: ${Math.floor(data.current.wind_speed*60*60/1000)}km/hr</div>
            <div>Visibility: ${data.current.visibility/1000}km</div>

        </section>
        
        <section id="hourly-forecast">
        <h3>Hourly Forecast</h3>
            <div id="hourly-forecast-list">
                <div id="hour-div"></div>
            </div>      
        </section>
        
    </div>
    
    <section id="daily-forecast">
        <h3>Daily Forecast</h3>
            <div id="daily-forecast-list">
                <div id="daily-div"></div>
            </div>
    </section>
 
    </div>
    `
}