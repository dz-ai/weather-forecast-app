export function onEnterKeyPress(event, fun) {
    event.onkeydown = e => {
        if (e.keyCode === 13) {
            fun();
        }
    }
}

export function tempSymbolFoo (unit) {
    let tempSymbol;
    if (unit === 'metric') {
        tempSymbol = 'C°'
    } else if (unit === 'imperial') {
        tempSymbol = 'F°'
    } else {
        tempSymbol = 'K°'
    }
    return tempSymbol
}








