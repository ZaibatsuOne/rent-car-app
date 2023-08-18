"use client";

import { Search, Settings2 } from "lucide-react";
import { FC, useState } from "react";

const SearchBar: FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  console.log(searchValue);
  return (
    <div className="flex px-5 py-2 rounded-[70px] gap-5 border border-primary100 text-secondary400">
      <Search />
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        placeholder="Search something here"
        className="outline-none py-[2px] px-2"
      />
      <Settings2 />
    </div>
  );
};

export default SearchBar;
