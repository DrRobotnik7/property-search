import "./SearchInput.css";
export default function SearchInput({ onInputChange }) {
  return (
    <>
      {/* <h2 className="text-blue-200">Search area</h2> */}
      <input
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
