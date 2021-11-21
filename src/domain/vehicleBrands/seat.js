// Import vehicle 
// var importVehicle = require('./../vehiclePrototype/vehiclePrototype');

// // Get instance vehicle
// var factoryVehicle = importVehicle.singletonVehicle;
// var vehicle = factoryVehicle.getVehicle();

var commonCategory = require('./../vehicleCategories/commonCategory');
var inherit = require('./../inheritance/inheritObject');

var seat = inherit(commonCategory);
seat.brand = "seat"

module.exports = seat;