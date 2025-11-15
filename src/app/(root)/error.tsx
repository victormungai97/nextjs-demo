"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

// Type for uncaught exception
type UncaughtException = Error & { digest?: string };

// Shape of Error page params
interface ErrorPageParams {
  error: UncaughtException;
}

export default function Error({ error }: ErrorPageParams) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong in website!</h2>
    </div>
  );
}
