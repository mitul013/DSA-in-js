import "./styles.css";

let setHtml = (fnName, data) =>
  (document.getElementById("app").innerHTML =
    fnName + " --> " + JSON.stringify(data));



setHtml(
  "flattenObject({ a: 1, b: { c: 2, d: { e: 3 } } })",
  flattenObject({ a: 1, b: { c: 2, d: { e: 3 } } })
);
