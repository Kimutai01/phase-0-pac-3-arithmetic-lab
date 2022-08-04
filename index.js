function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function increment(n) {
  return n + 1;
}
function decrement(n) {
  return n - 1;
}
function makeInt(n) {
  let a = parseFloat(n);
  return a;
}
function preserveDecimal(n) {
  let no = parseFloat(n);
  return no;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  decrement,
  increment,
  makeInt,
  preserveDecimal,
};
