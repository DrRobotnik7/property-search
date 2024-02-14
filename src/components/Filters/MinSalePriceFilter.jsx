export default function MinPriceFilter({ minPrice, setMinPrice }) {
  return (
    <select
      className="border border-gray-300 rounded-md text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none"
      value={minPrice}
      onChange={(e) => setMinPrice(e.target.value)}
    >
      <option value="">Min Price</option>
      <option value="10000">£10,000</option>
      <option value="20000">£20,000</option>
      <option value="30000">£30,000</option>
      <option value="40000">£40,000</option>
      <option value="50000">£50,000</option>
      <option value="60000">£60,000</option>
      <option value="70000">£70,000</option>
      <option value="80000">£80,000</option>
      <option value="90000">£90,000</option>
      <option value="100000">£100,000</option>
      <option value="110000">£110,000</option>
      <option value="120000">£120,000</option>
      <option value="125000">£125,000</option>
      <option value="130000">£130,000</option>
      <option value="140000">£140,000</option>
      <option value="150000">£150,000</option>
      <option value="160000">£160,000</option>
      <option value="170000">£170,000</option>
      <option value="180000">£180,000</option>
      <option value="190000">£190,000</option>
      <option value="200000">£200,000</option>
      <option value="210000">£210,000</option>
      <option value="220000">£220,000</option>
      <option value="230000">£230,000</option>
      <option value="240000">£240,000</option>
      <option value="250000">£250,000</option>
      <option value="275000">£275,000</option>
      <option value="300000">£300,000</option>
      <option value="325000">£325,000</option>
      <option value="350000">£350,000</option>
      <option value="375000">£375,000</option>
      <option value="400000">£400,000</option>
      <option value="425000">£425,000</option>
      <option value="475000">£475,000</option>
      <option value="500000">£500,000</option>
      <option value="550000">£550,000</option>
      <option value="600000">£600,000</option>
      <option value="650000">£650,000</option>
      <option value="700000">£700,000</option>
      <option value="750000">£750,000</option>
      <option value="800000">£800,000</option>
      <option value="850000">£850,000</option>
      <option value="900000">£900,000</option>
      <option value="950000">£950,000</option>
      <option value="1000000">£1,000,000</option>
      <option value="1100000">£1,100,000</option>
      <option value="1200000">£1,200,000</option>
      <option value="1300000">£1,300,000</option>
      <option value="1400000">£1,400,000</option>
      <option value="1500000">£1,500,000</option>
    </select>
  );
}
