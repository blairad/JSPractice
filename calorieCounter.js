function inputCaloriesByDay (day) {
    if (day === "Monday") {
        return 2000
    } else if (day === "Tuesday") {
        return 1900
    } else if (day === "Wednesday") {
        return 2700
    } else if (day === "Thursday") {
        return 2200
    } else if (day === "Friday"){
        return 2600
    } else if (day === "Saturday"){
        return 2800
    } else if (day === "Sunday") {
        return 3300
    }
}
// console.log(inputCaloriesByDay("Tuesday"))

getTotalCalories() {
    return inputCaloriesByDay("Monday") +
        inputCaloriesByDay("Tuesday") +
        inputCaloriesByDay("Wednesday") +
        inputCaloriesByDay("Thursday") +
        inputCaloriesByDay("Friday") +
        inputCaloriesByDay("Saturday") + 
        inputCaloriesByDay("Sunday");
}
