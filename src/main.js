// IMPORTS
// var Vehicle = require('./domain/vehiclePrototype/vehiclePrototype');
// var seatBrand = require('./domain/vehicleBrands/seat');

var vehicle = {
    model: "Vehicle",
    showModel: function() {
        console.log("Model: " + this.model);
    },
    showBrand: function() {
        console.log("Brand: " + this.brand);
    }
}

var seat = Object.create(vehicle);
seat.assignNumPassegengers = function() {
    console.log("Passengers num: ", + this.passengers);
}

var seatCar = Object.create(seat);

seatCar.model = "Seat Cupra";
seatCar.passengers = 4;

console.log(seatCar);











// var originalVehicle = new Vehicle();

// // Create a vehicle
// var seat = new Vehicle("Seat model");

// seat.toString();
// console.log("\nOriginal  vehicle\n")
// originalVehicle.toString();