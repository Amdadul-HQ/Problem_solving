// Define the type for a book
type Book = {
  title: string;
  author: string;
  year: number;
};


// Function to return an array of book titles
const getBookTitles=(bookArray: Book[]): string[] => {
  return bookArray.map(book => book.title);
}