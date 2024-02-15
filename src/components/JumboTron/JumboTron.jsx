import { useState } from "react";
import SearchInput from "../SearchInput/SearchInput";
import background from "../../assets/images/BackgroundImage.jpg";
import { useNavigate } from "react-router-dom";
import Filter from "../Filter/Filter";

export default function JumboTron() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [listingStatus, setListingStatus] = useState("rent");

  function handleSearch(target) {
    setSearchTerm(target.target.value);
    console.log(searchTerm);
    if (target.key === "Enter") {
      //call API and get data
      navigate("/results", {
        state: { search: searchTerm, listing_status: listingStatus },
      });
    }
  }

  function handleStatusSelect(target) {
    setListingStatus(target.target.value);
    console.log(listingStatus);
  }

  return (
    <>
      <div
        className="bg-cover bg-center h-96 flex items-center justify-center relative"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >

        <div className="flex flex-col">
          <SearchInput onInputChange={handleSearch} width={"w-96"} />
          <div className="mt-5 items-center justify-center text-center">
            <Filter
              name="Listing Status"
              options={["rent", "sale"]}

              handleSelect={handleStatusSelect}
            />
          </div>
        </div>
      </div>
    </>
  );
}
