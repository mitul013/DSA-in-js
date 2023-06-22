/**
 * given you arrays of number in which you have to find number which
 * occured more than n/2 times, if number is not present then return null
 *
 * [1,2,3,2,2,2,2] ==> 2
 * [1,2,1,3,1] ==> 1
 * [1,2,3,1,4,1] ==> null
 *
 */

function findMaxNumber(arr) {
  let counter = 0;
  let number = arr[0];

  // find number with more voting algo
  for (let n of arr) {
    if (number === n) {
      counter++;
    } else {
      counter--;
      if (counter == 0) {
        number = n;
        counter = 1;
      }
    }
  }

  // need to confirm, found number is correct or not
  let c = 0;
  for (let n of arr) {
    if (number == n) c++;
  }

  if (c > arr.length / 2) return number;
  return null;
}

findMaxNumber([1, 1, 1, 3, 3]);
