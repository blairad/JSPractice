var kelvinTemp = 275;

// celsius is 273.15 degrees lower than kelvin so taking it away from the kelvinTemp variable
var celsius = kelvinTemp - 273.15;

var farenheitTemp = celsius *(9/5) + 32
var farenheit = Math.floor(farenheitTemp);


// console.log(Math.floor(farenheitTemp));
console.log(`The temperature is ${farenheit} degrees F`);