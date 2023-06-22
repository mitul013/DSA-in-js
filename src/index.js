import "./styles.css";

let setHtml = (fnName, data) =>
  (document.getElementById("app").innerHTML =
    fnName + " --> " + JSON.stringify(data));

/**
 * Flatten array
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

// console.log(flattenArray([1, 2, [3, 4, [5, 6, [7, 8, 9]]]]));
setHtml(
  "flattenArray([1, 2, [3, 4, [5, 6, [7, 8, 9]]]])",
  flattenArray([1, 2, [3, 4, [5, 6, [7, 8, 9]]]])
);

/**
 * flatten Object
 */

function flattenObject(obj) {
  let flatObj = {};
  for ([key, value] of Object.entries(obj)) {
    if (typeof value === "object" && !Array.isArray(value)) {
      flatObj = { ...flatObj, ...flattenObject(value) };
    } else {
      flatObj[key] = value;
    }
  }
  return flatObj;
}

console.log(flattenObject({ a: 1, b: { c: 2, d: { e: 3 } } }));
setHtml(
  "flattenObject({ a: 1, b: { c: 2, d: { e: 3 } } })",
  flattenObject({ a: 1, b: { c: 2, d: { e: 3 } } })
);
