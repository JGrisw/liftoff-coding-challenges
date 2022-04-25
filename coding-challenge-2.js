function minMax(arr) {
  let low = arr[0];
  let high = 0;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < low) {
      low = arr[i];
    }
    if (arr[i] > high) {
      high = arr[i];
    }
  }
  result.push(low);
  result.push(high);
  console.log(result);
}

minMax([1, 2, 3, 4, 5]);
minMax([2334454, 5]);
minMax([1, 1]);
