function largestOfFour(arr) {
  // You can do this!
  var Maxnumber = [];
  for (let i = 0; i < arr.length ; i++){
    var numberLarge = arr[i][0];
    for (let j = 0; j < arr[i].length; j++){
      if (arr[i][j] > numberLarge){
        numberLarge = arr[i][j]
      }
    }
    Maxnumber[i] = numberLarge
  }
  return Maxnumber
}

function largestOfFour(arr) {
  return arr.map(function(group){
    return group.reduce(function(index, acomulador){
    return (acomulador > index) ? acomulador : index;
  
  })
  })
  }

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));