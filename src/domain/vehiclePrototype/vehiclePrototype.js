var Vehicle = function(category) {
    this.model = "modelo nuevo";
    this.category = category;
}

Vehicle.prototype.showModel = function() {
    console.log("Model: " + this.model);
}

// Vehicle.prototype.showBrand = function() {
//     console.log("Brand: " + this.brand);
// }

Vehicle.prototype.category = function() {
    console.log("Category: " + this.category);
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