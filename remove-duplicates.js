// Existe também uma saída mais clean code referente a esse código, porem não sabia se ela se encaixava na característica de
// "função pronta", que foi citada acima. Mas de qualquer forma segue a abaixo:

var arr = [1,2,1,2]
console.log(arr.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]));
var arr = [1,1,1,1]
console.log(arr.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]));
var arr = [1,1,2,2]
console.log(arr.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]));
var arr = [1,2,3,4]
console.log(arr.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]));

var numbers = [1,2,3,4,4,4,1,2]
console.log(numbers.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]));
