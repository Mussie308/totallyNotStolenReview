//Build a javascript function that iterates over an array of strings and capitalizes
// the first letter of each string.
//Use tdd to write this.

//To introduce you to "higher-order functions" utilize the array.forEach() method.
// var arr = ["banana split", "kiwi", "basketball"];
function toCaps(arr) {
  const newArr = [];
  for(let i = 0; i < arr.length; i++){
    newArr.push(arr[i].replace(arr[i].charAt(0), arr[i].charAt(0).toUpperCase()));
  }
  // console.log(newArr);
  return newArr;
}

// toCaps(arr);
export default toCaps;
