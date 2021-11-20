// IMPORTS
var seat = require('./domain/vehicleBrands/seat');

// Create vehicle from Seat brand of type Vehicle
var SeatCupra = Object.create(seat);

// Set props for "Seat Cupra"
SeatCupra.model = "Seat Cupra";
SeatCupra.passengers = 5;

// Print Seat Cupra
console.log(SeatCupra);