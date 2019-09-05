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

// var noOfBikes = [ 0, 1, 5, 6, 3, 8, 2, 7, 4,0]

// for(i =0; i < noOfBikes.length; i++ ) {
// 	if (noOfBikes[i] < 1) {
// 	console.log("For the love of god please buy a bike")
// } else if (noOfBikes[i] < 4) {
// 	console.log("maybe buy another one")	
// } else if (noOfBikes[i] <= 6) {
// 	console.log("go on, just one more")
// } else  {
//         console.log("good work")
// }
// }

// const userName = prompt('What is your name?');

// if (userName){
//         console.log("hello, " + userName + "!");
// } else {
//         console.log("hi")
// }
// const userQuestion = prompt("Please ask a question")

// console.log("hello, " + userName + "you asked" + userQuestion)

// const randomNumber = Math.floor(Math.random() * 8);
// const eightBall = "";

// if (randomNumber === 1)  {
// 	console.log ('Better not tell you now.') 
// } else if (randomNumber === 2) {
// 	console.log('Concentrate and ask again.')
// } else if (randomNumber === 3) {
// 	console.log('Reply hazy try again')
// } else if (randomNumber === 4) {
// 	console.log('Cannot predict now') 
// } else if (randomNumber === 5) {
// 	console.log('My reply is no.')
// } else if (randomNumber === 6) {
// 	console.log('My sources say no')
// } else if (randomNumber === 7) {
// 	console.log('Outlook not so good')
// } else if (randomNumber === 8) {
// 	console.log('Signs point to yes')
// } else  {
// 	console.log('could you repeat the question?')
// }

// console.log('The eight ball answer: ' + eightBall);

// function longestWord(string) {
//         var word = string.split(' ')
//         var longestWords = 0;
        
//         for (var i = 0; i < string.length; i++){
//         } if (word[i].length > longestWords) {
//                 longestWords = word[i].length;
//         }
        
//         return longestWords;
//         }

        
// longestWords('what is it?')

function palindrom(string) {

        string = string.replace(/\W/g, '').toLowerCase();{
          
          return (string == string.split('').reverse().join(''));
          
        }
     
      }

 console.log(palindrom('milk-klim'))     