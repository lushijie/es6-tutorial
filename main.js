let arr = [15, 2, 4, 3, 1, 10, 30, 25, 30, 30];

// function quickSort(arr) {
//   if (arr.length <= 1) return arr;
//   const left = [];
//   const right = [];
//   const base = arr.splice(Math.floor(arr.length / 2), 1)[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < base) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return quickSort(left).concat([base],quickSort(right));
// }
// console.log(quickSort(arr));

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}
// console.log(bubbleSort(arr));


function binarySearch(arr, item){
  let high = arr.length - 1;
  let low = 0;
  while(low <= high){
    let middle = Math.floor((high + low) / 2);
    if(arr[middle] === item){
      return middle;
    }
    if(item > arr[middle]){
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }
  return -1;
}

function binarySearch2(arr, key, low, high) {
  low = low || 0;
  high = high || arr.length;
  if(low >= high) {
    return -1;
  }
  let middle = Math.floor((high + low) / 2);
  if(arr[middle] === key) {
    return middle;
  } else if(arr[middle] > key) {
    high = middle -1;
    return binarySearch2(arr, key, low, high);
  } else if(arr[middle] < key) {
    low = middle +1;
    return binarySearch2(arr, key, low, high);
  }
}

console.log(binarySearch2(bubbleSort(arr), 40));


