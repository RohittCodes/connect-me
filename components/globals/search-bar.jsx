import { useState } from "react";
import axios from "axios";
import { Input } from "../ui/input";
import { Cross, DeleteIcon, Search } from "lucide-react";
import SearchResultsList from "./search-results-list";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const postsResponse = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&q=${searchQuery}`
      );
      postsResponse.data.forEach((post) => {
        post.type = "posts";
      });
      const photosResponse = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?_limit=10&q=${searchQuery}`
      );
      photosResponse.data.forEach((photo) => {
        photo.type = "images";
      });
      const combinedResults = [...postsResponse.data, ...photosResponse.data];
      setLoading(false);
      setSearchResults(combinedResults);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  const handleChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    handleSearch(query);
  };

  return (
    <div className="relative w-full">
      <div className="flex items-center bg-background-components border rounded-lg px-2 w-full">
        <Input
          type="text"
          className="h-10 rounded-l-lg focus-visible:ring-0 focus-visible:ring-offset-0 border-0 px-0"
          placeholder="Search for posts or images..."
          value={searchQuery}
          onChange={handleChange}
        />
        <Search className="text-text-disabled" />
      </div>
      {searchQuery && (
        <div className="absolute top-full rounded-md left-0 bg-white border w-full border-border-secondary rounded-b-lg shadow-lg">
          {loading && (
            <div className="w-full font-semibold text-gray-500 p-2">
              Loading...
            </div>
          )}
          <SearchResultsList results={searchResults} />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
