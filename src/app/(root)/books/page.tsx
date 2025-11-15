"use cache";
cacheLife("days");

import { Book } from "@/app/api/db";
import { cacheLife } from "next/cache";

const BooksPage = async () => {
  const response = await fetch("http://localhost:3000/api/books");
  const books: Array<Book> = await response.json();

  return (
    <>
      <code>{JSON.stringify(books, null, 2)}</code>
    </>
  );
};

export default BooksPage;
