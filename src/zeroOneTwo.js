/**
 * given array consist 0s, 1s, 2s, you have to sort it into [0s, 1s, 2s]
 * [1,2,0,0,1,2] ==> [0,0,1,1,2,2]
 */

/**
 * Approach 1
 * count 0, 1 and 2's occurences then update the given array accordingly
 */
function sortZeroOneTwo(arr) {
  let counterArray = [0, 0, 0];
  for (let num of arr) {
    counterArray[num]++;
  }
  console.log(counterArray);
  let i = 0;
  let j = 0;
  while (i < arr.length) {
    while (counterArray[i] > 0) {
      arr[j] = i;
      counterArray[i]--;
      j++;
    }
    i++;
  }
  return arr;
}

sortZeroOneTwo([1, 2, 1, 2, 0]);
sortZeroOneTwo([1]);

/**
 * Apprach 2
 * take 2 pointer start, end and iterate, start keep track for 0, end keep track for 1
 * and iterate is for iterating array
 */

function swapZeroOneTwo(arr) {
  let start = 0;
  let end = arr.length - 1;
  let i = 0;

  while (i <= end) {
    if (arr[i] === 0) {
      [arr[i], arr[start]] = [arr[start], arr[i]];
      start++;
      i++;
    }
    if (arr[i] === 2) {
      [arr[i], arr[end]] = [arr[end], arr[i]];
      end--;
    }
    if (arr[i] === 1) {
      i++;
    }
  }
  return arr;
}

// swapZeroOneTwo([1, 2, 1, 2, 0]);
// swapZeroOneTwo([1]);
swapZeroOneTwo([2, 2, 1, 1, 0]);
