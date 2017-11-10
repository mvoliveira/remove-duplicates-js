// array_test = [1,2,3,4]
array_test = [1,1,1,1]
// array_test = [1,1,2,2]
function compara(array){
  //   for (var i = 0; i < array.length-1; i++) {
  //     console.log(i);
  //     // temp_index = 0
  //     temp_index= 1 + i
  //     console.log(temp_index);
  //     if (array[i] === array[temp_index]){
  //       array.splice(array, temp_index, 1)
  //       console.log(array);
  //       console.log("iguais");
  //     }
  //     else {
  //       console.log("diferentes");
  //       console.log(array_test);
  //     }
  //   }
  // }
  //


}
// compara(array_test)








function imprime_index(element, index, array) {
  console.log(element);
console.log(index+1);
  if (array.indexOf(element) == array[index+1]){
  //  console.log(array.indexOf(index));
    console.log("achou igual");
  }

}

array_test.forEach(imprime_index)
