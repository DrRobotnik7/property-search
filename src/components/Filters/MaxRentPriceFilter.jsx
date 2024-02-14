export default function MaxRentPriceFilter({ maxRentPrice, setMaxRentPrice }) {
  return (
    <select
      className="border border-gray-300 rounded-md text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none"
      value={maxRentPrice}
      onChange={(e) => setMaxRentPrice(e.target.value)}
    >
      <option value="">Max Price</option>
      <option value="100">£100</option>
      <option value="150">£150</option>
      <option value="175">£175</option>
      <option value="200">£200</option>
      <option value="225">£225</option>
      <option value="250">£250</option>
      <option value="275">£275</option>
      <option value="300">£300</option>
      <option value="325">£325</option>
      <option value="350">£350</option>
      <option value="375">£375</option>
      <option value="400">£400</option>
      <option value="425">£425</option>
      <option value="450">£450</option>
      <option value="475">£475</option>
      <option value="500">£500</option>
      <option value="525">£525</option>
      <option value="550">£550</option>
      <option value="575">£575</option>
      <option value="600">£600</option>
      <option value="650">£650</option>
      <option value="700">£700</option>
      <option value="750">£750</option>
      <option value="800">£800</option>
      <option value="850">£850</option>
      <option value="900">£900</option>
      <option value="950">£950</option>
      <option value="1000">£1,000</option>
      <option value="1000">£1,000</option>
      <option value="1250">£1,250</option>
      <option value="1500">£1,500</option>
      <option value="1750">£1,750</option>
      <option value="2000">£2,000</option>
      <option value="2500">£2,500</option>
      <option value="3000">£3,000</option>
      <option value="3500">£3,500</option>
      <option value="4000">£4,000</option>
      <option value="4500">£4,500</option>
      <option value="5000">£5,000</option>
      <option value="7500">£7,500</option>
      <option value="8000">£8,000</option>
      <option value="8500">£8,500</option>
      <option value="9000">£9,000</option>
      <option value="9500">£9,500</option>
      <option value="10000">£10,000</option>
    </select>
  );
}
