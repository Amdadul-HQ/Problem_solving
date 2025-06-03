// Define the type for a person
type Person = {
  name: string;
  age: number;
  gender: 'male' | 'female';
};



// Function to filter out females and return names of remaining people
const getNonFemaleNames=(people: Person[]) : string[] => {
  return people
    .filter(person => person.gender !== 'female')
    .map(person => person.name);
}
