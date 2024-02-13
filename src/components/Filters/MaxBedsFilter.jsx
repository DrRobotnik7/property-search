export default function MaxBedsFilter({ maxBeds, setMaxBeds }) {
  return (
    <select
      className="border border-gray-300 rounded-md text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none"
      value={maxBeds}
      onChange={(e) => setMaxBeds(e.target.value)}
    >
      <option value="">Max Beds</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
  );
}
