var Vehicle = function(model, passengers) {
    this.model = "modelo nuevo";
    this.passengers = passengers;
}

Vehicle.prototype.showModel = function() {
    console.log("Model: " + this.model);
}

// Vehicle.prototype.showBrand = function() {
//     console.log("Brand: " + this.brand);
// }

Vehicle.prototype.passengers = function() {
    console.log("Passengers: " + this.passengers);
}

var factory = (function singleVehicle() {
    var instanceVehicle = new Vehicle();
    return {
        getVehicle: () => {
            return instanceVehicle;
        }
    }
})()

exports.singletonVehicle = factory;
exports.module = Vehicle;