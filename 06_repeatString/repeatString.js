const repeatString = function (s, n) {
  if (n < 0) return "ERROR";
  let str = "";
  for (let i = 0; i < n; i++) {
    str += s;
  }
  return str;
};
// repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
