import "./SearchInput.css";
import { useState } from "react";

export default function SearchInput({ onInputChange, width }) {
  return (
    <>
      <input
        className={"rounded-full h-12 text-center " + width}
        type="text"
        required
        size="10"
        placeholder="Type location & press enter to search"
        onKeyUp={onInputChange}
      />
    </>
  );
}
