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
