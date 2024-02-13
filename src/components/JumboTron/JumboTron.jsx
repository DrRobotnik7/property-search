import { useState } from "react";
import SearchInput from "../SearchInput/SearchInput";
import background from "../../assets/images/BackgroundImage.jpg";
import { useNavigate } from "react-router-dom";

export default function JumboTron() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState([""]);

  function handleSearch(target) {
    setSearchTerm(target.target.value);

    if (target.key === "Enter") {
      //call API and get data
      // console.log("Property Name" + testData.listing[0].displayable_address);
      // console.log(
      //   "Property Description" + testData.listing[0].short_description
      // );
      navigate("/results", { state: { search: searchTerm } });
    }
  }

  return (
    <div
      className="bg-cover bg-center h-96 flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <SearchInput onInputChange={handleSearch} />
    </div>
  );
}
