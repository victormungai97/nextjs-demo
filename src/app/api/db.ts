// Shape of a book
export interface Book {
  id: number;
  name: string;
}

// Dummy books
const books: Array<Book> = [
  { id: 1, name: "Atomic Habits" },
  { id: 2, name: "Deep Work" },
  { id: 3, name: "The 7 Habits of Highly Successful People" },
];

export default books;
