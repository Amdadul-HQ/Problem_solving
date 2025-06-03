// Define the type for a car
type Car = {
  make: string;
  model: string;
  year: number;
};


// Function to sort cars by year (ascending)
const sortCarsByYear=(carArray: Car[]): Car[] => {
  return carArray.sort((a, b) => a.year - b.year);
}

