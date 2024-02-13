import PropertyCard from "../../components/PropertyCard/PropertyCard";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchInput from "../../components/SearchInput/SearchInput";
import { testData } from "../../data.js";
import SearchResults from "../../components/SearchResults/SearchResults.jsx";
import Filter from "../../components/Filter/Filter.jsx";

export default function SearchResultsPage() {
  const location = useLocation();
  // console.log(location.state.search);

  useEffect(() => {
    // run API call with
    location.state.search;
    console.log("loaded");
  });

  useEffect(() => {
    // update properties array
  });

  function handleFilterSelect(target) {
    setSearchFilters((currentFilters) => {
      const name = target.target.name;
      const value = target.target.value;

      const newFilters = currentFilters;
      newFilters[0][name] = value;
      return [newFilters];
    });
    console.log(searchFilters);
  }

  function handleSearch(target) {
    setSearchTerm(target.target.value);
    // console.log("Key pressed " + target.key);
    // console.log("Current search term " + searchTerm);

    if (target.key === "Enter") {
      //call API and get data
      // console.log("Property Name" + testData.listing[0].displayable_address);
      // console.log(
      //   "Property Description" + testData.listing[0].short_description
      // );

      const propsArray = testData.listing.map((listing) => {
        return {
          address: listing.displayable_address,
          description: listing.short_description,
          image: listing.original_image[0],
          bathrooms: listing.num_bathrooms,
          bedrooms: listing.num_bedrooms,
          cost: listing.price,
        };
      });

      console.log(propsArray);
      setPropertiesArray(propsArray);
    }
  }
  const [searchTerm, setSearchTerm] = useState([location.state.search]);
  const [propertiesArray, setPropertiesArray] = useState([]);
  const [searchFilters, setSearchFilters] = useState([
    {
      maxCost: "",
      minCost: "",
      PropertyType: "",
    },
  ]);
  return (
    <>
      <h1>Hello Search Results Page</h1>;<h2>{searchTerm}</h2>
      <Filter
        name={"Max cost"}
        options={[300000, 50000, 600000, 700000]}
        handleSelect={handleFilterSelect}
      />
      <SearchInput onInputChange={handleSearch} />
      <SearchResults properties={propertiesArray} />
    </>
  );
}
