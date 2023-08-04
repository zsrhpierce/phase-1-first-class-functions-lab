const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

const allDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo', 'John'];

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const selectDifferentDrivers = function(drivers, selectingFunction) {
    return selectingFunction(drivers);
};


const firstTwoDriversResult = selectDifferentDrivers(allDrivers, returnFirstTwoDrivers);
const lastTwoDriversResult = selectDifferentDrivers(allDrivers, returnLastTwoDrivers);

console.log(firstTwoDriversResult);
console.log(lastTwoDriversResult);

function createFareMultiplier(multiplier){
    return function(fare) {
        return fare * multiplier;
    };
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const originalFare= 10;
const doubledFare = fareDoubler(originalFare);
const tripledFare = fareTripler(originalFare);

