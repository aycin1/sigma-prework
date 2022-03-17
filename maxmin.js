let userInput = prompt(
  "Enter a range of numbers separated by a space to return the highest and lowest value out of them!"
);
let splitting = userInput.split(" ");
let array = splitting.map(Number);

let newArr = [];

function max(arr) {
  let highestNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > highestNum) {
      highestNum = arr[i];
    }
  }
  return highestNum;
}

function min(arr) {
  let lowestNum = arr[0];
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] < lowestNum) {
      lowestNum = arr[j];
    }
  }
  return lowestNum;
}

newArr.push(max(array));
newArr.push(min(array));
alert(newArr);
