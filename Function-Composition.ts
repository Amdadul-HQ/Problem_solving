// Function to square a number
const square =(x: number): number=> {
  return x * x;
}

// Function to double a number
const double =(x: number): number => {
  return x * 2;
}

// Function to add 5 to a number
const addFive =(x: number): number => {
  return x + 5;
}

// Composed function: square → double → add 5
const composedFunction =(x: number): number => {
  return addFive(double(square(x)));
}


