const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const returnFirstTwoDrivers = function(drivers) {
   const firstDrivers = drivers.slice(0, 2);
   return firstDrivers;
}
const returnLastTwoDrivers = function (drivers) {
    const lastDrivers = drivers.slice(-2);
    return lastDrivers;
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

/*const createFareMultiplier = function (fare) {
    return function() {fare * fare}
}*/
const createFareMultiplier = (int) => (fare) => int * fare;
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, selection) {
    if (selection === returnFirstTwoDrivers) {
        return drivers.slice(0, 2);
    } else if (selection === returnLastTwoDrivers) {
        return drivers.slice(-2);
    }
}
