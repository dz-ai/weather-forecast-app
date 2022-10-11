import {clear, getEl, cityName, unit, toHtml} from "./DOM.js";
import {citySearch, foreCastSearch} from "./utils/api-requests.js";
import {elCreator} from "./elements-creators/element-create-main.js";
import {onEnterKeyPress, tempSymbolFoo} from "./utils/utilties.js";
import {creatElHourly} from "./elements-creators/el-create-hour.js";
import {creatElDaly} from "./elements-creators/el-create-day.js";

window.onLoad = () => {
getEl()
}

window.onClick = () => {
    clear()
    citySearch(cityName())
        .then(data => foreCastSearch(data.coord.lat, data.coord.lon, unit()))
        .then(data =>  {
            toHtml(data, elCreator, tempSymbolFoo, creatElHourly, creatElDaly)
        })
}

window.onPress = (event) => {
   onEnterKeyPress(event, onClick)
}