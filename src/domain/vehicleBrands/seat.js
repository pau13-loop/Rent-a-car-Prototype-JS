// Import vehicle 
// var importVehicle = require('./../vehiclePrototype/vehiclePrototype');

// // Get instance vehicle
// var factoryVehicle = importVehicle.singletonVehicle;
// var vehicle = factoryVehicle.getVehicle();

// Si utilizamos el obj como clase y constructr
var CommonCategory = require('./../vehicleCategories/commonCategory');
// Si utilizamos el método inherit para heredar
var commonCategory = require('./../vehicleCategories/commonCategory');
var inherit = require('./../inheritance/inheritObject');

//? A CommonCategory se le añade la propiedad brand de Seat
// var Seat = function() {
//     this.brand = "seat";
// }
// Seat.call(CommonCategory);


// Object.assign()
var seat = Object.assign(commonCategory);
seat.brand = "seat";
console.log('Seat: ', seat);
module.exports = seat;


// Utilizando .call() para heredar las props del constructor
// var Seat = function(model, passengers) {
//     CommonCategory.call(this, model, passengers);
//     this.brand = "seat";
// }
// module.exports = Seat;


// HEREDAMOS CON METODO inhereit()
// var seat = inherit(commonCategory);
// seat.brand = "seat";
// console.log(seat.showModel());
// module.exports = seat;


// HEREDAMOS CON OBJECT.CREATE 
// var Seat = function() {
//     this.brand = "seat";
// }
// Seat.prototype = Object.create(CommonCategory);
// console.log(Seat.prototype.prototype.showModel());
// module.exports = Seat;