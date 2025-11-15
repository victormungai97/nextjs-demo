import books from "@/app/api/db";

export const GET = async () => {
  return Response.json(books, { status: 401 });
};

export const POST = async ({ json }: Request) => {
  const book = await json();
  books.push(book);

  return GET();
};
