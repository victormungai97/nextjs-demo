"use cache";

import { Book } from "@/app/api/db";
import { cacheLife } from "next/cache";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Books | NextJS Demo",
  description: "It's the books page",
};

const BooksPage = async () => {
  cacheLife("twoweeks");
  const response = await fetch("http://localhost:3000/api/books");
  const books: Array<Book> = await response.json();

  return (
    <>
      <code>{JSON.stringify(books, null, 2)}</code>
    </>
  );
};

export default BooksPage;
