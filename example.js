const fs = require("fs");

// Read input from input.txt
fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading input file:", err);
    return;
  }

  // Process the input data
  const numbers = data.split(/\s+/).map(Number);
  const sum = numbers.reduce((acc, num) => acc + num, 0);

  // Write the output to output.txt
  fs.writeFile("output.txt", sum.toString(), (err) => {
    if (err) {
      console.error("Error writing output file:", err);
      return;
    }
    console.log("Sum has been written to output.txt");
  });
});
