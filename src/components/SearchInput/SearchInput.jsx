import "./SearchInput.css";
export default function SearchInput({ onInputChange }) {
  return (
    <>
      <input
        type="text"
        required
        size="10"
        placeholder="Search postcode"
        width={"200px"}
        onKeyUp={onInputChange}
      />
    </>
  );
}
