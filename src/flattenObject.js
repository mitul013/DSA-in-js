/**
 * flatten Object
 * {a:1,b:{c:2,d:3}} ==> {a:1,c:2,d:3}
 */

function flattenObject(obj) {
  let flatObj = {};
  for (let [key, value] of Object.entries(obj)) {
    if (typeof value === "object" && !Array.isArray(value)) {
      flatObj = { ...flatObj, ...flattenObject(value) };
    } else {
      flatObj[key] = value;
    }
  }
  return flatObj;
}

console.log(flattenObject({ a: 1, b: { c: 2, d: { e: 3 } } }));
