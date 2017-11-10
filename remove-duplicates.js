function remove_duplicates(arr){
  for (var i = 0; i < arr.length; i++) {
    increment= i + 1
    if (arr[i]===arr[increment]) {
      arr.splice(arr[increment],1)

    } else {
      increment+1
    }
  }
console.log(arr);
}



remove_duplicates([1,2,3,4])
remove_duplicates([1,1,1,1])
remove_duplicates([1,1,2,2])
remove_duplicates([1,2,1,2])


// Existe também uma saída mais clean code referente a esse código, porem não sabia se ela se encaixava na característica de
//"função pronta", que foi citada acima. Mas de qualquer forma segue a abaixo:
//
// var arr = [1,2,1,2]
// console.log(arr.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]));
// var arr = [1,1,1,1]
// console.log(arr.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]));
// var arr = [1,1,2,2]
// console.log(arr.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]));
// var arr = [1,2,3,4]
// console.log(arr.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]));

//var numbers = [1,2,3,4,4,4,1,2]
//console.log(numbers.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]));
