import Filter from "../Filter/Filter";
import { rentRates } from "../../data";

export default function Filters({ onSelect }) {
  return (
    <>
      <Filter
        name={"Rent"}
        options={["rent", "sale"]}
        handleSelect={onSelect}
      />
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
    </>
  );
}
