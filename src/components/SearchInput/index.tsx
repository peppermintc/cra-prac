import { ChangeEvent, useState } from "react";
import { Container, Dropdown, Input } from "./index.styles";

const SearchInput = ({ list }: { list: string[] }) => {
  const [value, setValue] = useState("");

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const getFilteredList = (list: string[], value: string) => {
    const regex = new RegExp(`^${value}`, "i");
    return list.filter((word) => regex.test(word));
  };

  const filteredList = getFilteredList(list, value);
  const isDropdownOpen = filteredList.length > 0;

  return (
    <Container>
      {/* Search Input */}
      <Input
        type="text"
        placeholder="Please enter words"
        value={value}
        onChange={onInputChange}
      />

      {/* Dropdown Recommendation */}
      {isDropdownOpen && (
        <Dropdown>
          {filteredList.map((word) => (
            <li>{word}</li>
          ))}
        </Dropdown>
      )}
    </Container>
  );
};

export default SearchInput;
