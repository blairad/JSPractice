function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === "bear" || userInput === "human" || userInput === "gun"){
        return userInput
    } else {
        console.log("please enter a valid option")
    }
}

function getComputerChoice(){
   const randomNumber = Math.floor(Math.random() * 3 );
   if (randomNumber === 0) {
       return "bear" ; 
   } else if (randomNumber === 1) {
       return "human";
   } else  {
       return "gun";
   }
}
// console.log(getComputerChoice());
function determineWinner(userChoice, computerChoice){
    if (userChoice === computerChoice) {
        return "it's a draw"
    } if (userChoice === "human") {
        if (computerChoice === "bear") {
            return "you have been mauled by a bear"
        } else {
            return "you have disarmed a gun"
        }
    }
    if (userChoice === "bear") {
        if (computerChoice === "gun"){
            return "you have been shot by gun"
        } else {
            return "you have mauled a human"
        }
    }
    if (userChoice === "gun") {
        if (computerChoice === "human"){
            return "your gun has been disarmed"
        } else {
            return "you have shot a bear"
        }
    }
}

function playGame() {
    var promtUserChoice = promt ("please choose, bear, human or gun");
    var userChoice = getUserChoice(promtUserChoice);
    var computerChoice = getComputerChoice();
    console.log(userChoice)
    console.log(comouterChoice)
    console.log(determineWinner(userChoice, computerChoice));
}
playGame();