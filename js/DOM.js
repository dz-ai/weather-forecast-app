
let $mainContent,
    $cityName,
    $unit;

export function getEl () {
    $mainContent = $('#main-content');
    $cityName =   $('#searchBox');
    $unit =        $('#unit-selection');
}

export function clear () {
    $mainContent.empty()
}

export function cityName () {
   return $cityName.val()
}

export function unit () {
    return $unit.val()
}

export function toHtml (data, elCreator, tempSymbol, creatElHourly, creatElDaly) {
    $($mainContent.append(elCreator(data, $cityName.val(), tempSymbol($unit.val()))));
    data.hourly.map(data => {
        $($('#hour-div').append(creatElHourly(data, tempSymbol($unit.val()))))
    });
    data.daily.map(data => {
        $($('#daily-div').append(creatElDaly(data, tempSymbol($unit.val()))));
    });

}
