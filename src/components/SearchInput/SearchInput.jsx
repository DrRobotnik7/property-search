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
        placeholder="Where do you want to live?"
        onKeyUp={onInputChange}
      />
    </>
  );
}
