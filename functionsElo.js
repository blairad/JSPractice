const power = function (base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++)
        result *= base;
    return result
}

console.log(power(2, 10))

function square(x) {
    return x * x
}
console.log(square(5))

function greet(who) {
    console.log("hello " + who);
}
greet("harry");
console.log('bye');

function morePower(base, exponent) {
    if (exponent == undefined)
        exponent = 2;
    let result = 1;
    for (var count = 0; count < exponent; count++)
        result *= base;
    return result;
}
console.log(morePower(10))
console.log(morePower(4, 3))

function findSolution(target) {
    function find(start, history) {
        if (start == target)
            return history;
        else if (start > target)
            return null;
        else
            return find(start + 5, "(" + history + " + 5)") ||
                find(start * 3, "(" + history + " * 3)");
    }
    return find(1, "1");
}
console.log(findSolution(13))

function helloWorld(num) {
    for (let i = 0; i <= num; i++)
        if (num % 3 === 0) {
            console.log("hello")
        } else if (num % 5 === 0) {
        console.log("world")
    } else if (num % 3 && num % 5 === 0) {
        console.log('hello world')
    }
}
console.log(helloWorld(30))

function hello(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("hello world", i);
        } else if (i % 3 === 0) {
            console.log("Hello", i);;
        } else if (i % 5 === 0) {
            console.log("World", i)
        }
    }
}
hello(3)

function min(x, y) {
    return Math.min(x, y)
}
console.log(min(10, 9))

//recursion 
function isEven(num) {
        if (num == 0) return true;
        else if (num == 1) return false
        else if (num < 0) return isEven(-num)
        else return isEven(num- 2)
}
console.log(isEven(75))
console.log(isEven(50))
console.log(isEven(-1))

myNums = [1,2,3,4,5,6,7,8,9,10]

function sum(n){
    if(n < 1){
        return []
    } else {
        const sumCount = sum(n -1)
        sumCount.push(n)
        return sumCount;
    }
}
console.log(sum(100))