import PropertyCard from "../../components/PropertyCard/PropertyCard";
import { useState } from "react";
import SearchInput from "../../components/SearchInput/SearchInput";
import { testData } from "../../data.js";
import SearchResults from "../../components/SearchResults/SearchResults.jsx";

export default function SearchResultsPage() {
  function handleSearch(target) {
    setSearchTerm(target.target.value);
    console.log("Key pressed " + target.key);
    console.log("Current search term " + searchTerm);

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

      //map data to format as needed
      //return new property data array
      // setPropertiesArray(propertyData);
    }
  }
  const [searchTerm, setSearchTerm] = useState([""]);
  const [propertiesArray, setPropertiesArray] = useState([]);
  return (
    <>
      <h1>Hello Search Results Page</h1>;
      <SearchInput onInputChange={handleSearch} />
      <SearchResults properties={propertiesArray} />
    </>
  );
}
