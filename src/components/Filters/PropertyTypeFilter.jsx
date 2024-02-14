export default function PropertyTypeFilter({ propertyType, setPropertyType }) {
  return (
    <select
      className="border border-gray-300 rounded-md text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none"
      value={propertyType}
      onChange={(e) => setPropertyType(e.target.value)}
    >
      <option value="">Property type</option>
      <option value="Flat"> Flat</option>
      <option value="Studio"> Studio </option>
      <option value="Detached house"> Detached</option>
      <option value="Semi-detached house"> Semi-detached house</option>
      <option value="Terraced house"> Terraced house</option>
      <option value="End terrace house">End terrace house</option>
    </select>
  );
}
