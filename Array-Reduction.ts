// Sum of Even Numbers
const sumOfEvenNumbers=(numbers: number[]): number=> {
  return numbers.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0);
}


