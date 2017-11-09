var names = ["matheus", "matheus", "jorge", "jose", "matheus"]

console.log(names.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]));

//
var numbers = [1,2,3,4,4,4,1,2]

console.log(numbers.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]));

//
