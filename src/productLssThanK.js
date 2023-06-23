/**
 * GIven an array of positive numbers, the task is to find the number of possible contiguous subarray
 * having product less than a given number k.
 *
 * n=4 k=10
 * arr = [1,2,3,4]
 *
 * answer ==> 7
 * [1],[2],[3],[4],[1,2],[1,2,3],[2,3] ==> 7
 *
 */

/**
 * Approach 1
 * take 2 nested loop and find all posibile subarray
 * and check prodcut of that and if its less than K then add into the counter
 *
 * but Time Complexity ==> O(n^2)
 */

/**
 * Approach 2
 * Using sliding window technique
 */

function countSubArryaProductLessThanK(arr, k) {
  let n = arr.length;
  let l = 0;
  let r = 0;
  let product = arr[0];
  let count = 0;
  while (r <= n) {
    console.log(product, k, product < k);
    if (product < k) {
      count += r - l + 1;
      r++;
      product *= arr[r];
    } else if (l < r) {
      product /= arr[l];
      l++;
    } else {
      r++;
      product *= arr[r];
    }
  }
  return count;
}

countSubArryaProductLessThanK(
  [57, 44, 92, 28, 66, 60, 37, 33, 52, 38, 29, 76, 8, 75, 22],
  18
);
