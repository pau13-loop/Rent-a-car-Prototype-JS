// IMPORTS
var Seat = require('./domain/vehicleBrands/seat');

// Create vehicle from Seat brand of type Vehicle
var seatCupra = Object.create(Seat);

// Set props for "Seat Cupra"
// seatCupra.model = "Seat Cupra";
// seatCupra.category = "diesel";


// Print Seat Cupra
console.log(seatCupra.showModel());



// var importVehicle = require('./domain/vehiclePrototype/vehiclePrototype');
// var factoryVehicle = importVehicle.singletonVehicle;

// var seat = factoryVehicle.getVehicle();
// var ford = factoryVehicle.getVehicle();

// seat = {
//     model: "Leaon",
//     brand: "Seat",
//     category: "Diesel"
// }

// ford = {
//     model: "Focus",
//     brand: "Ford",
//     category: "Gasoline"
// }

// console.log(ford === seat);

// console.log("Seat model: ", seat);
// console.log("Ford model: ", ford);