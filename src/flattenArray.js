/**
 * Flatten array
 * [1,2,[3,4,5]] ==> [1,2,3,4,5]
 */

function flattenArray(arr) {
  let flatArray = [];
  arr.map((ele) => {
    if (Array.isArray(ele)) {
      flatArray = [...flatArray, ...flattenArray(ele)];
    } else {
      flatArray.push(ele);
    }
  });
  return flatArray;
}

console.log(flattenArray([1, 2, [3, 4, [5, 6, [7, 8, 9]]]]));