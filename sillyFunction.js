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
//   var word = string.split(' ');
//   var bigWord = '' ;
  
//   for (var i = 0; i < word.length; i++){
//    if (bigWord.length < word[i].length) {
//           bigWord = word[i];
//     }
//     }
//   string = bigWord;
//   return string.length;
//   }

  
// console.log(longestWord('my favourite day is Friday'));



// function palindrom(string) {

//         string = string.replace(/\W/g, '').toLowerCase();{
          
//           return (string == string.split('').reverse().join(''));
          
//         }
     
//       }

//  console.log(palindrom('milk-klim'))     

// to check if numbers are odd or even

// function oddNum(array){
  
//   const evenArray = [];
  
//   for (var i = 0; i < array.length; i++){
  
//   if (array[i] % 2 === 0){
//     evenArray.push(array[i])
//   }
    
//   }
//     return evenArray
// }

// console.log(oddNum([1,2,3,4,5,6,7,8,9,10]));
// console.log(oddNum([26,45,67,88]));

//filter method even

// function evenNum(array){
  
//   return array.filter(function(num){
//     return num % 2 === 0;
//   })   

// }

// console.log(evenNum([1,2,3,4,5,6,7,8,9,10]));
// console.log(evenNum([26,45,67,88]));

// filter method odd 

// function evenNum(array){
  
//   return array.filter(function(num){
//     return num % 2 === 1;
//   })   

// }

// console.log(evenNum([1,2,3,4,5,6,7,8,9,10]));
// console.log(evenNum([26,45,67,88]));

// function to take two arguments, a string and number and to repeat the sting the amount of times from the number

// function repeatString(string, num){
  
//   //    var finalString = string;
    
//     if(num < 0)
//       return ' ';
//      else if (num === 1) 
//       return string;
//       else 
//         return string + repeatString(string, num -1 )
    
//   }
  
//   console.log(repeatString('car',4))
//   console.log(repeatString('dog',10))

// // same but with for loop
// function repeatString(string, num){
  
//   var finalString = '';
 
//  if(num <= 0){
//    return finalString;
//  }
//  for (var i = 1; i <= num; i ++){
//    finalString += string;
//  }
//   return finalString
// }

// console.log(repeatString('car',4))
// console.log(repeatString('dog',10))

// as above but with while statement

// function repeatString(string, num){
  
//   var finalString = '';

// if (num <= 0){
//   return finalString;
// }
//   while (num > 0){
//     finalString += string;
//     num--;
//   }
// return finalString;
// }

// console.log(repeatString('car', 4))
// console.log(repeatString('dog', 3))

// return longest word

// return longest word

// function longestWord(string){
  
//   // regExp /\W/g; the Capital W takes out any non word character is not A-Z etc. the g is for global so it will not just stop at first character it finds
//   // var regExp = /\W/g; if var declared like this you can add to arguments eg (regExp, ' ')
  
//   var stringMinusSpecialChars = string.replace(/\W/g, ' ');
//   var biggestWord = '';
//   var sentence = stringMinusSpecialChars.split(' ');
  
//   for (var i =0; i < sentence.length; i++){
//     if (sentence[i].length > biggestWord.length){
//       biggestWord = sentence[i]
//     }
//   }
//   return biggestWord.length;
  
// }


// console.log(longestWord('is the a constitutional crisis?'))
// console.log(longestWord('Will the slug resign?'))

// return longest word

// function longestWord(string){
  
//   // regExp /\W/g; the Capital W takes out any non word character is not A-Z etc. the g is for global so it will not just stop at first character it finds
//   // var regExp = /\W/g; if var declared like this you can add to arguments eg (regExp, ' ')
  
//   var stringMinusSpecialChars = string.replace(/\W/g, ' ');
//   var biggestWord = '';
//   var sentence = stringMinusSpecialChars.split(' ');
  
//   for (var word of sentence){
//        if(word.length > biggestWord.length) {
//          biggestWord = word;
//        }
//      }
//   return biggestWord;
//   // return biggestWord.length to show number rather than word
// }


// console.log(longestWord('is the a constitutional crisis?'))
// console.log(longestWord('Will the slug resign?'))

// alphabetical order string

// function alphaOrder(string){
  
//   var myString = string.split('').sort().join('');{
//     return myString;
//     // even less just do: return string.split('').sort().join('');
//   }
  
// }

// console.log(alphaOrder('the beatles'));
// console.log(alphaOrder('hello, goodbye'));

// add .replace(/\W/g, '') to get rid of ,!? etc. add space between ('') -> (' ') for either word reverse or individual chars

// alphabetical order string but with spread operator

// function alphaOrder(string){
//   return [...string].sort().join('');
// }

// console.log(alphaOrder('the beatles'));
// console.log(alphaOrder('hello, goodbye'));

// // a reverse name 

// function nameShuffle(str) {
//   return str.split(' ').reverse().join(' ');
// }

// console.log(nameShuffle("John Smith"));
// console.log(nameShuffle("Albert Einstein"));

//another little play around. still not quite getting why some things do certain things yet! :/. i do like how little changes make bid differences

// function reverseString(string){
//   return string.split('').reverse().join('');
// }

// console.log(reverseString('car'));
// console.log(reverseString('bar'));

// // another as above with string operator. need to read up on that more
// //the [...string] splits up the string into an array of individual characters so no split is needed

// function reverseString(string){
//   return [...string].reverse().join('')
// }


// console.log(reverseString('car'));
// console.log(reverseString('bar'));




// a wee function to remove strings from an array

// function arrayFilter(array){
  
//   var numbers = [];
//   // array. length itterates from start to finish. 0 to ...
//   for(var i = 0; i < array.length; i++){
//     if(typeof array[i] === 'number'){
//       numbers.push(array[i])
//     }
//   }
//  return numbers 
// }
// console.log(arrayFilter([1,2,3,'5','2',6,14,'12']))
// console.log(arrayFilter([11,22,33,'nope','2',436,214,'filter me']))
// console.log(arrayFilter([1,22,35,'5','bye',6,144,'okay']))



// // same same but different... less code

// function arrayFilter(array){ 
//   var numbers = array.filter(function(item){
//     return typeof item === 'number';
//   });
  
//  return numbers  
// }

// console.log(arrayFilter([1,2,3,'5','2',6,14,'12']))
// console.log(arrayFilter([11,22,33,'nope','2',436,214,'filter me']))
// console.log(arrayFilter([1,22,35,'5','bye',6,144,'okay']))

// same function but with added example of arraow function

// function arrayFilter(array){ 
//   //'string' or 'number' etc for different result
//   return array.filter(number => typeof number === 'string');
  
// };

// console.log(arrayFilter([1,2,3,'5','2',6,14,'12']))
// console.log(arrayFilter([11,22,33,'nope','2',436,214,'filter me']))
// console.log(arrayFilter([1,22,35,'5','bye',6,144,'okay']))


// find largest number in array methods


// function largestNumber(array) {
  
//   var maxNumber = 0;
  
//   for(var i = 0; i < array.length; i ++){
//     if(array[i] > maxNumber){
//       maxNumber = array[i]
//     }
//   }
//   return maxNumber;
// }

// console.log(largestNumber([4,6,1,2,8,10]))
// console.log(largestNumber([90,89,73,100,2,3]))


// less code

// function largestNumber(array) {

//   return Math.max(...array)
  
// }

// console.log(largestNumber([4,6,1,2,8,10]))
// console.log(largestNumber([90,89,73,100,2,3]))



// check that a string is a palendrome

function palindrome(string) {
  
  let palindromeString = string.replace()
  
}

console.log(palindrome('Is This a Palendrome'));
console.log(palindrome('Was It a Rat I Saw?'));
console.log(palindrome('Eva, Can I stab bats In a Cave?'))
