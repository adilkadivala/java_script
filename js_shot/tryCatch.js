try {
  let result = someFunction(); // Assume someFunction is not defined
} catch (error) {
  console.error("An error occurred:", error.message);
}

function validateAge(age) {
  if (age < 0) {
    throw new Error("Age cannot be negative");
  }
  return true;
}

try {
  validateAge(-1);
} catch (error) {
  console.error(error.message);
}
