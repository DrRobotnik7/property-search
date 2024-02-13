import "./SearchInput.css";
export default function SearchInput({ onInputChange }) {
  return (
    <>
      <input className="rounded-full w-96 h-12 text-center"
        type="text"
        required
<<<<<<< HEAD
        // size="10"
        placeholder:text-center="Search Area"
=======
        size="10"
        placeholder="Search postcode"
        width={"200px"}
        onKeyUp={onInputChange}
>>>>>>> fe29fb6ba77daf3e2cf84b2f58e5f784cdacb32b
      />
    </>
  );
}
