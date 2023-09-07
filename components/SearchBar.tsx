"use client";

import { ChangeEvent, FC } from "react";
import { TextFieldInput, TextFieldRoot, TextFieldSlot } from "@radix-ui/themes";

import { Search } from "lucide-react";
import { useSearch } from "@/utils/store";

const SearchBar: FC = () => {
  const { searchValue, setSearchValue } = useSearch();

  return (
    <TextFieldRoot radius="full" size="3" variant="surface" className="">
      <TextFieldSlot>
        <Search />
      </TextFieldSlot>
      <TextFieldInput
        placeholder="Search something here"
        size="3"
        value={searchValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchValue(e.target.value)
        }
      />
    </TextFieldRoot>
  );
};

export default SearchBar;
