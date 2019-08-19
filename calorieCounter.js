function inputCaloriesByDay(day) {
    if (day === 'Monday') {
        return 2500;
    } else if (day === 'Tuesday') {
        return 2500;
    } else if (day === 'Wednesday') {
        return 2500;
    } else if (day === 'Thursday') {
        return 2500;
    } else if (day === 'Friday'){
        return 2500;
    } else if (day === 'Saturday'){
        return 2500;
    } else if (day === 'Sunday') {
        return 2501;
    } else {
        return "enter a day"
    }
}
// console.log(inputCaloriesByDay("Wednesday"))

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
    const actualCalories = getTotalCalories();
    const idealCalories = getIdealCalories();

    if (actualCalories === idealCalories){
        return "You ate just the right amount of food!";
    } if (actualCalories > idealCalories) {
        return "Time to head to the gym!";
    } else  {
        return "Time for seconds!";
    }
}

console.log(getTotalCalories())
console.log(calculateHealthPlan())