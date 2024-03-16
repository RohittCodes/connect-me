"use client";

import { CommandBox } from "./command-menu";
import { useEffect, useState } from "react";
import SearchBar from "./search-bar";

const Navbar = () => {
  const welcomeQuotes = [
    "the jungle of posts",
    "the jungle of images",
    "the jungle of comments",
    "the jungle of todos",
    "the jungle of users",
    "the jungle of albums",
  ];

  const [quote, setQuote] = useState(welcomeQuotes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuote(welcomeQuotes[Math.floor(Math.random() * welcomeQuotes.length)]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center py-1 md:py-0 items-center h-28 md:h-16 fixed top-0 w-full bg-white">
      <div className="flex flex-col gap-2 md:flex-row md:justify-between items-center h-full w-full border-b-2 px-4 md:gap-44">
        <div className="text-sm w-36 font-semibold text-gray-500">
          <h2 className="text-2xl font-bold text-indigo-500">
            ConnectMe! <p className="ml-2 text-xs font-light">{quote}</p>
          </h2>
        </div>
        <SearchBar />
        <CommandBox />
      </div>
    </div>
  );
};

export default Navbar;
