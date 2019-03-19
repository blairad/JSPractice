function subtractionSum(a, b){
    console.log("sub");
    return (a - b) ;
  }
function additionSum(a, b){
    console.log("add");
    return (a + b) ;
  }   
function divisionSum (a, b){
  console.log("div");
  return (a / b);
}
function multiplicationSum (a, b){
  console.log("mult");
  return (a * b);
}
function calculate(a , b, symbol) 
{
  if (symbol == '+')  
  {
    return (additionSum(a,b));
  }

  else if (symbol == '-') 
  {
    return(subtractionSum(a,b));
  }
  else if (symbol == '/') 
  {
    return(divisionSum(a,b));
  }
  else if (symbol == '*') 
  {
    return(multiplicationSum(a,b));
  }
}

//program starts here
let a = 10;
let b = 200;
var symbol = '+';
console.log(a + '+' + b  + '='  + calculate(a, b, symbol));

a = 10;
b = 200;
symbol = '-';
console.log(a + '-' + b + '=' + calculate(a, b, symbol));

a = 10;
b = 200;
symbol = '/';
console.log(a + '/' + b + '=' + calculate(a, b, symbol));

a = 10;
b = 200;
symbol = '*';
console.log(a + '*' + b + '=' + calculate(a, b, symbol));