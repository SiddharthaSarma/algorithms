// Bubble sort
// Time complexity n^2

function bubbleSort(arr) {
  let arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //Swap the numbers
        let tmp = arr[j]; //Temporary variable to hold the current number
        arr[j] = arr[j + 1]; //Replace current number with adjacent number
        arr[j + 1] = tmp; //Replace adjacent number with current number
      }
    }
  }
  return arr;
}
