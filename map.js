// Implement your own version of the built-in array map function.

// Yours will take in two arguments. The first will be an array to map
// and the second will be a callback function. The function will
// return a new array based on the results of the callback function.




function map (arr, fun){

  var a = [];

  arr.forEach(function(e){
    element = fun(e);
    a.push(element);
  });

  return a;
}


var out = map(["ground", "control", "to", "major", "tom"], (elm) => { return elm.length });

console.log(out);