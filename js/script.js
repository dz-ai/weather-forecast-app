// the html page selectors section
let $mainContent,
    $searchBox,
    $cord_1,
    $cord_2,
    $unit,
    $hourDiv,
    $dailyDiv;

function getEl () {
    $mainContent = $('#main-content');
    $searchBox =   $('#searchBox');
    $unit =        $('#unit-selection');
    $cord_1 =      $('#cord_1');
    $cord_2 =      $('#cord_2');

}
// end of html page selectors section


// symbol system for temp
let tempSymbol,
    city,
    numHolderHour = 0,
    numHolderDay = 0,
    hour,
    minute;

function datFoo () {
    const date = new Date(),
            day =date.getDate(),
          month = date.getMonth()+1,
          year = date.getFullYear()
    return `${day+numHolderDay}/${month}/${year}`
}

function hourFoo () {
    let date = new Date();
        hour = date.getHours();
        minute = date.getMinutes();
}

if ($unit.val() === 'metric') tempSymbol = 'C°'
if ($unit.val() === 'imperial') tempSymbol = 'F°'
if ($unit.val() === undefined) tempSymbol = 'K°'
// end of symbol system for temp


// template for the weather result function
function creatMyElement(item) {
     // take care of generating the right symbol according to the temp unit
    if ($unit.val() === 'metric') {
        tempSymbol = 'C°'
    } else if ($unit.val() === 'imperial') {
        tempSymbol = 'F°'
    } else {
        tempSymbol = 'K°'
    }

    const template = `
    <section id="title">
    <h2>${city}</h2>
    <div>coordinats: ${item.lat} , ${item.lon}</div>
    </section>
    
    <div id="result" onload="getEl()">
    
    <div id="current-hour-div">
    
    <section id="current">
            <h3>Current Weather</h3>

            <div>Date: ${datFoo()}</div>
            <img src="https://openweathermap.org/img/wn/${item.current.weather[0].icon}@2x.png" alt="icon">
            <p>${item.current.weather[0].description}</p>
            <div>Temp: ${item.current.temp} ${tempSymbol}</div>
            <div>Feels Like: ${item.current.feels_like} ${tempSymbol}</div>
            <div>Humidty: ${item.current.humidity}%</div>
            <div>Wind: ${item.current.wind_speed*60*60/1000}km/hr</div>
            <div>Visibility: ${item.current.visibility/1000}km</div>

        </section>
        
        <section id="hourly-forecast">
        <h3>Hourly Forecast</h3>
        
        <div id="hour-div"></div>
        </section>
        
    </div>
    
    <section id="daily-forecast">
        <h3>Daily Forecast</h3>
        
        <div id="daily-div"></div>
    </section>
    

    </div>
    `
    return $(template)
}
// end of template for the weather result function

function creatDataResultsElHourly (item) {
    if (hour + numHolderHour === 24) {
        hour = 0;
        numHolderHour = 0;
    }
    const template = `
    <div class="data-content">
                    <div>${ hour+numHolderHour}:${minute}</div>
                    <img src="https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png" alt="icon" width="60" height="auto">
                    <div>${item.weather[0].description}</div>
                    <div>Temp: ${item.temp} ${tempSymbol}</div>
                    <div>Feels Like: ${item.feels_like} ${tempSymbol}</div>
                    <div>Humidity: ${item.humidity}%</div>
                    <div>Wind: ${item.wind_speed*60*60/1000} km/hr</div>
                    <div>Visibiliyt: ${item.visibility/1000} km</div>
                </div>
    `
    return $(template)
}

function creatDataResultsElDaily (item) {
    const template = `
    <div class="data-content">
                <div>${datFoo()}</div>
                <img src="https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png" alt="icon" width="60" height="auto" alt="icon">
                <div>${item.weather[0].description}</div>
                <div>Temp Morning: ${item.temp.morn} ${tempSymbol}</div>
                <div>Temp Day: ${item.temp.day} ${tempSymbol}</div>
                <div>Temp Evening: ${item.temp.eve} ${tempSymbol}</div>
                <div>Max Temp: ${item.temp.max} ${tempSymbol}</div>
                <div>Min Temp: ${item.temp.min} ${tempSymbol}</div>
                <div>Humidity: ${item.humidity}%</div>
                <div>Wind: ${item.wind_speed*60*60/1000} km/hr</div>
            </div>
    `
    return $(template)
}



function cityOnClicked () {
    $mainContent.html('');
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${$searchBox.val()}&appid={kay}`)
        .then(response => {
          response
              .json()
              .then(data => {
                  city = data.name
                  console.log(data.name)
                  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=minutely&units=${$unit.val()}&appid={key}`)
                      .then(response => {
                          response
                              .json()
                              .then(data => {
                                  console.log(data)
                                  $mainContent.append(creatMyElement(data))
                                  $hourDiv =  $('#hour-div')
                                  $dailyDiv = $('#daily-div')
                                  hourFoo();
                                  data.hourly.map(hour => {
                                      $hourDiv.append(creatDataResultsElHourly(hour));
                                      numHolderHour++;
                                  })
                                  data.daily.map(day => {
                                      $dailyDiv.append(creatDataResultsElDaily(day));
                                      numHolderDay++;
                                  })



                              });
                      });
              })
        })
}


