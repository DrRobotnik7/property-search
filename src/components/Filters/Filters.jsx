import Filter from "../Filter/Filter";
import { rentRates } from "../../data";

export default function Filters({ onSelect }) {
  return (
    <>
      <div className="grid grid-cols-2 gap-y-2 md:grid-cols-6 mb-3 md:mb-1">
        <Filter name={"Max cost"} options={rentRates} handleSelect={onSelect} />
        <Filter name={"Min cost"} options={rentRates} handleSelect={onSelect} />
        <Filter
          name={"Max bedrooms"}
          options={["--", 1, 2, 3, 4]}
          handleSelect={onSelect}
        />
        <Filter
          name={"Min bedrooms"}
          options={["--", 1, 2, 3, 4]}
          handleSelect={onSelect}
        />
        <Filter
          name={"Max bathrooms"}
          options={["--", 1, 2, 3, 4]}
          handleSelect={onSelect}
        />
        <Filter
          name={"Min bathrooms"}
          options={["--", 1, 2, 3, 4]}
          handleSelect={onSelect}
        />
      </div>
    </>
  );
}
