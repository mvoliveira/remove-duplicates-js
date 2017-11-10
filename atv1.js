function remove_duplicates(array){
  for (var i = 0; i < array.length; i++) {
    increment= i + 1
    if (array[i]===array[increment]) {
      console.log("removeu");
      array.splice(array[i])
    } else {
      increment
      console.log("nao removeu");
    }
  }
  console.log(array);
}



// remove_duplicates([1,2,3,4])
// remove_duplicates([1,1,1,1])
remove_duplicates([1,1,2,2])
