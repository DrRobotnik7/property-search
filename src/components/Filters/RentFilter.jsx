function RentFilter({ isRent, setIsRent }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={isRent}
        onChange={() => setIsRent(!isRent)}
      />
      Rent
    </div>
  );
}

export default RentFilter;
