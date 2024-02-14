import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import SearchInput from "../../components/SearchInput/SearchInput";
import SearchResults from "../../components/SearchResults/SearchResults.jsx";
import MinSalePriceFilter from "../../components/Filters/MinSalePriceFilter";
import MaxSalePriceFilter from "../../components/Filters/MaxSalePriceFilter";
import MinRentPriceFilter from "../../components/Filters/MinRentPriceFilter";
import MaxRentPriceFilter from "../../components/Filters/MaxRentPriceFilter";
import MinBedsFilter from "../../components/Filters/MinBedsFilter";
import MaxBedsFilter from "../../components/Filters/MaxBedsFilter";
import PropertyTypeFilter from "../../components/Filters/PropertyTypeFilter";
import RentFilter from "../../components/Filters/RentFilter";
import SaleFilter from "../../components/Filters/SaleFilter";

export default function SearchResultsPage() {
  // The useLocation hook is used to access the current location object, which contains information about the current URL. Specifically, it's used to retrieve the searchTerm, isRent, and isSale states from the location's state if they were passed through navigation from the Home page
  const location = useLocation();
  // Check if location.state exists before attempting to access its properties
  const initialSearchTerm =
    location.state && location.state.searchTerm !== undefined
      ? location.state.searchTerm
      : "";
  const initialIsRent =
    location.state && location.state.isRent !== undefined
      ? location.state.isRent
      : false;
  const initialIsSale =
    location.state && location.state.isSale !== undefined
      ? location.state.isSale
      : false;

  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [propertiesArray, setPropertiesArray] = useState([]);
  const [minSalePrice, setMinSalePrice] = useState("");
  const [maxSalePrice, setMaxSalePrice] = useState("");
  const [minRentPrice, setMinRentPrice] = useState("");
  const [maxRentPrice, setMaxRentPrice] = useState("");
  const [minBeds, setMinBeds] = useState("");
  const [maxBeds, setMaxBeds] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [isRent, setIsRent] = useState(initialIsRent);
  const [isSale, setIsSale] = useState(initialIsSale);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // This is an asynchronous function that fetches property listings from the Zoopla API. It takes a status parameter which can be either "rent" or "sale", and sends a GET request to the API with query parameters that include the search area, page size, radius, and the desired listing status
    const fetchProperties = async (status) => {
      try {
        const response = await axios({
          method: "GET",
          url: "https://zoopla.p.rapidapi.com/properties/list",
          params: {
            area: searchTerm,
            page_size: "40",
            radius: "40",
            listing_status: status,
          },
          headers: {
            "X-RapidAPI-Key":
              "837ceef95cmshc8484b8fa7149a0p1c8ca5jsnd0c0dec05e1a",
            "X-RapidAPI-Host": "zoopla.p.rapidapi.com",
          },
        });
        // Check if response.data.listing exists and if it is an array
        if (!response.data.listing || !Array.isArray(response.data.listing)) {
          throw new Error(
            "Sorry! No listings available in this area. Please search a different area."
          );
        }
        // It maps the returned listings to a simpler structure containing ID, image URL, address, title, cost, number of bedrooms, bathrooms, description, type, and status
        const properties = response.data.listing.map((listing) => ({
          id: listing.listing_id,
          image:
            listing.images["0"] && listing.images["0"].original
              ? listing.images["0"].original
              : "",
          address: listing.displayable_address,
          title: listing.title,
          cost: listing.price,
          bedrooms: listing.num_bedrooms,
          bathrooms: listing.num_bathrooms,
          description: listing.short_description,
          type: listing.property_type,
          status: listing.listing_status,
        }));
        return properties;
        // Handle any errors that might occur during the API request. If an error occurs, it is logged to the console
      } catch (error) {
        console.error(error);
        // Update the error state with the error message
        setErrorMessage(error.message);
      }
    };
    // This asynchronous function is responsible for calling fetchProperties with the correct status based on the application's state (isRent and isSale). It concatenates the results of both rent and sale listings into a single array, which it then sets as the state of propertiesArray
    const fetchData = async () => {
      let results = [];
      // Determine the status to fetch based on the active filters
      const statusToFetch = isRent ? "rent" : isSale ? "sale" : "rent";

      // Fetch properties for the determined status
      const propertyResults = await fetchProperties(statusToFetch);

      // Set the results to the fetched properties
      results = propertyResults;

      setPropertiesArray(results);
    };
    if (searchTerm) {
      fetchData();
    }
  }, [searchTerm, isRent, isSale]); // Re-run the useEffect if any of these values changes

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
    // Reset the error message state to an empty string when a new search is run
    setErrorMessage("");
  };

  useEffect(() => {
    const applyFilters = () => {
      // Create a new array called filtered by filtering propertiesArray. Use .filter to go through each element in propertiesArray and keep only the elements for which the call back function returns true
      if (propertiesArray && propertiesArray.length > 0) {
        const filtered = propertiesArray.filter((property) => {
          // sets the priceFilter to the cost of the current property
          const priceFilter = property.cost;
          // Price filter logic
          const minPriceFilter =
            property.status === "rent" ? minRentPrice : minSalePrice;
          const maxPriceFilter =
            property.status === "rent" ? maxRentPrice : maxSalePrice;
          const matchesMinPrice =
            minPriceFilter === "" || priceFilter >= minPriceFilter;
          const matchesMaxPrice =
            maxPriceFilter === "" || priceFilter <= maxPriceFilter;
          // Bedrooms filter logic
          const matchesMinBeds = minBeds === "" || property.bedrooms >= minBeds;
          const matchesMaxBeds = maxBeds === "" || property.bedrooms <= maxBeds;
          // Property type filter logic
          const matchesPropertyType =
            propertyType === "" || property.type === propertyType;
          // Listing status filter logic
          const matchesRent = !isRent || property.status === "rent";
          const matchesSale = !isSale || property.status === "sale";

          return (
            matchesMinPrice &&
            matchesMaxPrice &&
            matchesMinBeds &&
            matchesMaxBeds &&
            matchesPropertyType &&
            matchesRent &&
            matchesSale
          );
        });
        setFilteredProperties(filtered);
      } else {
        setFilteredProperties([]);
      }
    };
    applyFilters();
  }, [
    minSalePrice,
    maxSalePrice,
    minRentPrice,
    maxRentPrice,
    minBeds,
    maxBeds,
    propertyType,
    isRent,
    isSale,
    propertiesArray,
  ]); // Re-run the useEffect if any of these values changes

  // Reset the value of the filters to their original state
  function handleReset() {
    setMinSalePrice("");
    setMaxSalePrice("");
    setMinBeds("");
    setMaxBeds("");
    setPropertyType("");
    setIsRent(false);
    setIsSale(false);
    setFilteredProperties(propertiesArray);
  }

  return (
    <>
      <div className="flex flex-wrap gap-4 p-4">
        <SearchInput onInputChange={handleSearch} />
        {isRent && (
          <>
            <MinRentPriceFilter
              minRentPrice={minRentPrice}
              setMinRentPrice={(value) => setMinRentPrice(parseInt(value))}
            />
            <MaxRentPriceFilter
              maxRentPrice={maxRentPrice}
              setMaxRentPrice={(value) => setMaxRentPrice(parseInt(value))}
            />
          </>
        )}
        {isSale && (
          <>
            <MinSalePriceFilter
              minSalePrice={minSalePrice}
              setMinSalePrice={(value) => setMinSalePrice(parseInt(value))}
            />
            <MaxSalePriceFilter
              maxSalePrice={maxSalePrice}
              setMaxSalePrice={(value) => setMaxSalePrice(parseInt(value))}
            />
          </>
        )}
        <MinBedsFilter
          minBeds={minBeds}
          setMinBeds={(value) => setMinBeds(parseInt(value))}
        />

        <MaxBedsFilter
          maxBeds={maxBeds}
          setMaxBeds={(value) => setMaxBeds(parseInt(value))}
        />

        <PropertyTypeFilter
          propertyTypes={propertyType}
          setPropertyType={(value) => setPropertyType(value)}
        />

        <RentFilter isRent={isRent} setIsRent={setIsRent} />
        <SaleFilter isSale={isSale} setIsSale={setIsSale} />

        <button onClick={handleReset}>Reset Filters</button>
      </div>
      {/* Render error conditionally. If error is truthy then render error */}
      {errorMessage && <div className="error">{errorMessage}</div>}
      {/*Check if filteredProperties has a length greater than zero before using it. If filteredProperties is empty, we fall back to propertiesArray.Before using propertiesArray, we check to ensure it's an array and has a length greater than zero.If neither filteredProperties nor propertiesArray meet these conditions, we default to an empty array. */}
      <SearchResults
        properties={
          filteredProperties.length > 0
            ? filteredProperties
            : Array.isArray(propertiesArray) && propertiesArray.length > 0
            ? propertiesArray
            : []
        }
      />
    </>
  );
}
