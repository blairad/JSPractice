function inputCaloriesByDay (day) {
    if ("Monday") {
        return 2000
    } else if ("Tuesday") {
        return 1900
    } else if ("Wednesday") {
        return 2700
    } else if ("Thursday") {
        return 2200
    } else if ("Friday"){
        return 2600
    } else if ("Saturday"){
        return 2800
    } else if ("Sunday") {
        return 3300
    }
}
console.log(inputCaloriesByDay("Tuesday"))

function getTotalCalories() {
    return inputCaloriesByDay("Monday") +
        inputCaloriesByDay("Tuesday") +
        inputCaloriesByDay("Wednesday") +
        inputCaloriesByDay("Thursday") +
        inputCaloriesByDay("Friday") +
        inputCaloriesByDay("Saturday") + 
        inputCaloriesByDay("Sunday");
}

function getIdealCalories(){
    const idealDailyCalories = 2500;
    return idealDailyCalories * 7
}
function calculateHealthPlan() {
    const actualCalories = getTotalCalories()
    const idealCalories = getIdealCalories()

    if (actualCalories === idealCalories){
        return "You ate just the right amount of food!";
    } else if (actualCalories > idealCalories) {
        return "Time to head to the gym!";
    } else if (actualCalories < idealCalories) {
        return "Time for seconds!";
    }
}

console.log(calculateHealthPlan("Tuesday"))