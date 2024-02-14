import "./SearchInput.css";
import { useState } from "react";

export default function SearchInput({ onInputChange }) {
  return (
    <>
      <input
        className="rounded-full w-96 h-12 text-center"
        type="text"
        required
        size="10"
        placeholder="Search area"
        width={"200px"}
        onKeyUp={onInputChange}
      />
    </>
  );
}
