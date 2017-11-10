let letters = "abcdefgh"

function changePairs(string){
  let array = []
  for(let i = 0; i <= string.length-1;i++){
    array.push(string[i])
  }

let newArray = []
  for (let j = 0; j < array.length-1; j++) {
    newArray.push(array[j + 1], array[j])
    j++
  }
  console.log(newArray.join(''))
}

changePairs(letters)
