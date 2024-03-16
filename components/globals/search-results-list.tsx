import { SeparatorHorizontal, SeparatorVertical } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Separator } from "../ui/separator";

interface ResultsObjects {
  userId?: number;
  id: number;
  title: string;
  body?: string;
  albumId?: number;
  url?: string;
  thumbnailUrl?: string;
  type: string;
}

interface SearchResultsListProps {
  results: ResultsObjects[];
}

const SearchResultsList = ({ results }: SearchResultsListProps) => {
  return (
    <div className="flex flex-col max-h-[16rem] rounded-md w-full font-semibold text-gray-500 p-2 overflow-y-scroll">
      {results.map((result) => (
        <div className="flex flex-col gap-1" key={result.id + result.type}>
          <Link
            href={`/${result.type}/${result.id}`}
            passHref={true}
            key={result.id}
            className="cursor-pointer flex py-1 justify-between items-center gap-1 hover:text-gray-700 transition-colors duration-300 ease-in-out"
          >
            <p className="text-md">{result.title}</p>
            <p>{result.type}</p>
          </Link>
          {results.indexOf(result) !== results.length - 1 && (
            <Separator className="w-full" />
          )}
        </div>
      ))}
    </div>
  );
};

export default SearchResultsList;
