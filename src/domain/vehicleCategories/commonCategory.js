var importVehicle = require('./../vehiclePrototype/vehiclePrototype');
var factoryVehicle = importVehicle.singletonVehicle;
var vehicle = factoryVehicle.getVehicle();
var inherit = require('./../inheritance/inheritObject');

var commonCategory = inherit(vehicle);
commonCategory.discountTax = 40;

module.exports = commonCategory;