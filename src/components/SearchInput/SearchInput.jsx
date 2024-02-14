import "./SearchInput.css";
import { useState } from "react";

export default function SearchInput({ onInputChange }) {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onInputChange(inputValue);
      setInputValue("");
    }
  };

  return (
    <>
      <input
        className="rounded-full w-96 h-12 text-center"
        type="text"
        required
        size="10"
        placeholder="Search area"
        width={"200px"}
        value={inputValue} // Control the input with state
        onChange={handleInputChange} // Update state on input change
        onKeyDown={handleKeyDown} // Handle the Enter key press
      />
    </>
  );
}
