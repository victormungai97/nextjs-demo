import books from "@/app/api/db";

// Shape of Book Details
interface BookDetailsProps {
  id: string;
}

// Shape of route context
interface BookDetailsRouteContext {
  params: Promise<BookDetailsProps>;
}

export const GET = async (_: Request, { params }: BookDetailsRouteContext) => {
  "use cache";

  const { id } = await params;

  const index = books.findIndex((b) => b.id === +id);
  const book = books[index];
  return Response.json(book);
};

export const PUT = async (
  { json }: Request,
  { params }: BookDetailsRouteContext
) => {
  const { id } = await params;
  const book = await json();

  const index = books.findIndex((b) => b.id === +id);
  books[index] = book;
  return Response.json(books);
};

export const DELETE = async (
  { json }: Request,
  { params }: BookDetailsRouteContext
) => {
  const { id } = await params;
  const book = await json();

  const index = books.findIndex((b) => b.id === +id);
  books.splice(index, 1);
  return Response.json(books);
};
