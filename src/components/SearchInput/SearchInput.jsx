import "./SearchInput.css";
export default function SearchInput({ onInputChange }) {
  return (
    <>
      <input className="rounded-full w-96 h-12 text-center"
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
