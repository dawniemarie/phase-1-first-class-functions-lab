const returnFirstTwoDrivers = function() {
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function() {
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers.slice(2,4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (num) {
    return function (fare) {
        return num*fare
    }
}

const fareDoubler = createFareMultiplier(2) // doubles fare //

const fareTripler = createFareMultiplier(3) // triples fare //

const selectDifferentDrivers = (arrayofDrivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(arrayofDrivers);
}