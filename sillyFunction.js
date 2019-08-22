function cycleWeather (weather){
	if (weather === 'sunny'){ 
        return "go cycle";
}    else if  (weather === "overcast") {
            return "go for it" ;
} 	else if ((weather === "rain") || (weather === "snow")) {
		return "maybe not today" ;	
} 	else {
		return "i'm a fish and that's not a type of weather";
    }
}

console.log(cycleWeather('sunny'))