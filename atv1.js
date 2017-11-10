function remove_duplicates(array){
  for (var i = 0; i < array.length; i++) {
    increment= i + 1
    if (array[i]===array[increment]) {
      array.splice(array[increment],1)

    } else {
      increment+1
    }
  }
console.log(array);
}



remove_duplicates([1,2,3,4])
remove_duplicates([1,1,1,1])
remove_duplicates([1,1,2,2])
