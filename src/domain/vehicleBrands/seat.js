// Import vehicle 
var importVehicle = require('./../vehiclePrototype/vehiclePrototype');

// Get instance vehicle
var factoryVehicle = importVehicle.singletonVehicle;
var vehicle = factoryVehicle.getVehicle();

var seat = vehicle;

seat.assignNumPassegengers = function() {
    console.log("Passengers num: ", + this.passengers);
}

module.exports = seat;