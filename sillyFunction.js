// function cycleWeather (weather){
// 	if (weather === 'sunny'){ 
//         return "go cycle";
// }    else if  (weather === "overcast") {
//             return "go for it" ;
// } 	else if ((weather === "rain") || (weather === "snow")) {
// 		return "maybe not today" ;	
// } 	else {
// 		return "i'm a fish and that's not a type of weather";
//     }
// }

// console.log(cycleWeather('sunny'))

var noOfBikes = [ 0, 1, 5, 6, 3, 8, 2, 7, 4,0]

for(i =0; i < noOfBikes.length; i++ ) {
	if (noOfBikes[i] < 1) {
	console.log("For the love of god please buy a bike")
} else if (noOfBikes[i] < 4) {
	console.log("maybe buy another one")	
} else if (noOfBikes[i] <= 6) {
	console.log("go on, just one more")
} else  {
        console.log("good work")
}
}

// console.log(noOfBikes(3))