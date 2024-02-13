function SaleFilter({ isSale, setIsSale }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={isSale}
        onChange={() => setIsSale(!isSale)}
      />
      Sale
    </div>
  );
}

export default SaleFilter;
