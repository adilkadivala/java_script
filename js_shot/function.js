// Function Declaration and Expression
// Arrow Functions
// Scope: Global, Local, Block

console.log(add(10, 25));

function add(a, b) {
  return a + b;
}

const multiply = (a, b) => a * b;

let x = 10; // globle scope

if (true) {
  let y = 20; // block or local scope
  console.log(x - y);
}

console.log(y);
