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
    <div className="flex justify-center items-center h-16 fixed w-full bg-white">
      <div className="flex justify-between items-center h-full w-full border-b-2 px-4 gap-44">
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
