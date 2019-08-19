var myAge = 20;

var earlyYears = 2;

// This will account for the first two years of a cats life where they experience accelerated growth
// var earlyYears = earlyYears *= 25;
earlyYears *= 25;

var laterAge = myAge - 2;
laterAge *= 4;

console.log(earlyYears);
console.log(laterAge);

var myAgeInCatYears = earlyYears + laterAge;
var myName = "andrew";

console.log(`My name is ${myName} i am ${myAge} in human years and ${myAgeInCatYears} in cat years`)