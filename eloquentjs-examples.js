var power = function(base, exponent) {
    var result = 1;
    for (var count = 0; count < exponent; count++)
      result *= base;
    return result;
  }
  console.log(power(2, 10))

  // returns 2 * 2 * 2 * 2 ect until it will reach 1024

  var landscape = function() {
    var result = "";
    var flat = function(size){
      for(var count = 0; count < size; count++)
     result += "_";
    };
    var mountain = function(size){
      result += "/";
      for (var count = 0; count < size; count++)
        result += "'";
      result += "\\";
    }
    
    flat(3);
    mountain(4);
    flat(3);
    mountain(1);
    flat(1);
    mountain(2)
    return result;
  };
  console.log(landscape())
//"___/''''\___/'\_/''\"  