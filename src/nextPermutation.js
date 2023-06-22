/**
 * find next number
 * [1,2,3,4,7,5] ==> [1,2,3,5,4,7]
 * [5,4,3,2,1] ==> [1,2,3,4,5] // if number if already max then return samllest number
 */

function nextPermutation(arr) {
  // take last element and find first small number from last
  // [1,2,3,4,7,5] ==> last ele = 5, first small = 4
  let len = arr.length;
  let smallIdx = -1;
  for (let i = len - 2; i >= 0; i--) {
    if (arr[len - 1] > arr[i]) {
      smallIdx = i;
      break;
    }
  }

  // swap found small and last number, and if smallIdx not found then skip
  // [1,2,3,4,7,5] ==> [1,2,3,5,7,4]
  smallIdx !== -1 &&
    ([arr[smallIdx], arr[len - 1]] = [arr[len - 1], arr[smallIdx]]);

  // reverse the i+1 (smallest's Index + 1) to n elements
  // [1,2,3,5,7,4] ==> [1,2,3,5,4,7]
  let i = smallIdx + 1;
  let j = len - 1;
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
  return arr;
}

console.log(nextPermutation([1, 2, 3, 4, 7, 5]));
console.log(nextPermutation([5, 4, 3, 2, 1]));
