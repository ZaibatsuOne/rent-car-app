import { TextFieldInput, TextFieldRoot, TextFieldSlot } from "@radix-ui/themes";
import { Search } from "lucide-react";
import { FC } from "react";

const SearchBar: FC = () => {
  return (
    <TextFieldRoot radius="full" size="3" variant="surface">
      <TextFieldSlot>
        <Search />
      </TextFieldSlot>
      <TextFieldInput placeholder="Search something here" size="3" />
    </TextFieldRoot>
  );
};

export default SearchBar;
