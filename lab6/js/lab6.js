// Author: Emma Faszer <efaszer@ucsc.edu>
// Created: 24 October 2024

//Define variables
myTransport = ["Car", "Walk", "Bike", "Bus"]

// Object
myMainRide = {
    make: "Toyota",
    model: "Highlander",
    color: "blue",
    year: "2008",
    age: function() {
        return 2024 - this.year;
    }
}

// Output
document.writeln("How I get around: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");