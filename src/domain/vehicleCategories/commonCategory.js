var importVehicle = require('./../vehiclePrototype/vehiclePrototype');
var factoryVehicle = importVehicle.singletonVehicle;
var vehicle = factoryVehicle.getVehicle();

var Vehicle = require('./../vehiclePrototype/vehiclePrototype');
var inherit = require('./../inheritance/inheritObject');

// Object.assing()
var CommonCategory = function () {
    this.discountTax = 40;
    this.category = "common";
}
var commonCategory = Object.assign(vehicle);
commonCategory.discountTax = 40;
commonCategory.category = "common";
console.log(commonCategory);
module.exports = commonCategory;


// Utilizando .call() para heredar las props del constructor
// var CommonCategory = function (model, passengers) {
//     Vehicle.call(this, model, passengers)
//     this.discountTax = 40;
//     this.category = "common";
// }
// module.exports = CommonCategory;

// HEREDAMOS CON METODO inhereit()
// var commonCategory = inherit(vehicle);
// commonCategory.discountTax = 40;
// console.log(commonCategory.showModel());
// module.exports = commonCategory;


// HEREDAMOS CON OBJECT.CREATE 
// var CommonCategory = function () {
//     this.discountTax = 40;
// }
// CommmonCategory.prototype = Object.create(vehicle);
// console.log(CommmonCategory.prototype.showModel());
// module.exports = CommonCategory;