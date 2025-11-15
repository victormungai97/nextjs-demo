/*

"use client";

import { useEffect, useState } from "react";

// Shape of an Album
interface Album {
  id: number;
  title: string;
}

const AlbumsPage = () => {
  const [albums, setAlbums] = useState<Array<Album>>([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/albums"
        );
        const data = await response.json();

        setAlbums(data);
      } catch (e) {
        console.error(`Error fetching albums: ${e}`);
      }
    };

    fetchAlbums();
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-col">
      {albums.map(({ id, title }) => (
        <div
          key={id}
          className="bg-white dark:bg-black shadow-md rounded-lg p-4"
        >
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-gray-600">Album ID: {id}</p>
        </div>
      ))}
    </div>
  );
};

export default AlbumsPage;

*/

"use server";

import { cacheLife } from "next/cache";

// Shape of an Album
interface Album {
  id: number;
  title: string;
}

const AlbumsPage = async () => {
  "use cache";
  cacheLife("hours");

  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!response.ok) throw new Error("Failed to fetch data");

  const albums: Array<Album> = await response.json();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      {albums.map(({ id, title }) => (
        <div
          key={id}
          className="bg-white dark:bg-black shadow-md rounded-lg p-4"
        >
          <h3 className="text-lg dark:text-[#efefef] text-foreground font-bold mb-2">
            {title}
          </h3>
          <p className="text-gray-600">Album ID: {id}</p>
        </div>
      ))}
    </div>
  );
};

export default AlbumsPage;
