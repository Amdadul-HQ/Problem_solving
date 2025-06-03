{

// Define the type for a person
type Person = {
  name: string;
  age: number;
};


// Function to find a person by name and modify their age
const updateAgeByName =(peopleArray: Person[], targetName: string, newAge: number): Person[] => {
  return peopleArray.map(person => 
    person.name === targetName ? { ...person, age: newAge } : person
  );
}

}