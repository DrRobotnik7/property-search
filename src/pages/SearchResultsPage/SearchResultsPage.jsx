import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchInput from "../../components/SearchInput/SearchInput";
import SearchResults from "../../components/SearchResults/SearchResults.jsx";
import axios from "axios";
import Filters from "../../components/Filters/Filters.jsx";

export default function SearchResultsPage() {
  const location = useLocation();

  const [searchTerm, setSearchTerm] = useState([location.state.search]);
  const [propertiesArray, setPropertiesArray] = useState([]);
  const [filteredProperties, setfilteredProperties] = useState([]);
  const [searchFilters, setSearchFilters] = useState({
    maxCost: null,
    minCost: null,
    PropertyType: null,
    maxBedrooms: null,
    minBedrooms: null,
    maxBathrooms: null,
    minBathrooms: null,
  });
  const [favourties, setFavourites] = useState(
    JSON.parse(localStorage.getItem("favourites"))
  );

  useEffect(() => {
    filterProperties();
  }, [searchFilters]);

  useEffect(() => {
    console.log("Favourites", favourties);
    localStorage.setItem("favourites", JSON.stringify(favourties));
  }, [favourties]);

  useEffect(() => {
    // run API call with search data from homepage
    const getData = async () => {
      await fetchProperties(
        location.state.search,
        location.state.listing_status
      );
    };
    getData();
  }, []);

  const parseRawPropertiesData = (propertiesArray) =>
    //removes unwanted info from fetched data
    propertiesArray.listing.map((listing) => {
      return {
        id: listing.listing_id,
        address: listing.displayable_address,
        description: listing.short_description,
        image: listing.original_image[0],
        bathrooms: listing.num_bathrooms,
        bedrooms: listing.num_bedrooms,
        cost: listing.price,
      };
    });

  //API call to fetch properties
  async function fetchProperties(searchTerm, listing_status) {
    const options = {
      method: "GET",
      url: "https://zoopla.p.rapidapi.com/properties/list",
      params: {
        area: searchTerm,
        page_size: "40",
        radius: "40",
        listing_status: listing_status,
      },
      headers: {
        "X-RapidAPI-Key": "6258e18b25mshd96a594dcf7fcb5p1b1fd6jsn955bae6d8f8b",
        "X-RapidAPI-Host": "zoopla.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      //set properties based on data received from API call
      setPropertiesArray(parseRawPropertiesData(response.data));
      // initialize properties array that can be updated based on filters
      setfilteredProperties(parseRawPropertiesData(response.data));
    } catch (error) {
      console.error(error);
    }
  }

  function resetFilters() {
    setSearchFilters(...propertiesArray);
  }
  async function handleSearch(target) {
    //update search term state
    setSearchTerm(target.target.value);

    if (target.key === "Enter") {
      //call API and get data
      await fetchProperties(searchTerm, "rent");
    }
  }

  function testProp(prop, key, isMax) {
    // tests the property against a specific key and value in the filters array
    // console.log(
    //   prop[key.substring(3).toLowerCase()],
    //   key,
    //   searchFilters[key],
    //   isMax
    // );
    //min/max is removed from the start of the key name and it is changed to lower case to match the keys of the property object
    return isMax
      ? parseInt(prop[key.substring(3).toLowerCase()]) <=
          parseInt(searchFilters[key])
      : parseInt(prop[key.substring(3).toLowerCase()]) >=
          parseInt(searchFilters[key]);
  }

  function filterProperties() {
    const filteredArr = [];

    //loops through all properties
    for (const prop of propertiesArray) {
      //set flag to test if any test fails
      let addToFilterProps = true;
      for (const filter in searchFilters) {
        // loop only runs on filters that have been set (not equal to null)
        if (searchFilters[filter] !== null) {
          addToFilterProps = filter.includes("max")
            ? testProp(prop, filter, true)
            : testProp(prop, filter, false);
          //if the test ever gives a negative result, we break the loop and do not add the property to the filtered array
          if (addToFilterProps === false) {
            break;
          }
        }
      }
      // add property to filter if it has passed all tests
      if (addToFilterProps) {
        filteredArr.push(prop);
      }
    }
    setfilteredProperties(filteredArr);
  }

  function handleFilterSelect(target) {
    const name = target.target.name;
    const value = target.target.value;
    setSearchFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
    console.log(searchFilters);
  }

  function handleFavouriteClick(property) {
    ///check if item already in favourites
    const currentFavourites = JSON.parse(localStorage.getItem("favourites"));
    let propertySavedAlready = false;
    //loop over each element in the array
    for (const favourite of currentFavourites) {
      propertySavedAlready = parseInt(favourite.id) == property.id;
    }
    if (!propertySavedAlready) {
      setFavourites(() => [...currentFavourites, property]);
    } else {
      alert("Property saved already");
    }
  }

  return (
    <>
      <h1>{searchTerm} properties</h1>

      <Filters onSelect={handleFilterSelect} />
      {/* <Button onClick=  >Reset filters</Button> */}
      <SearchInput onInputChange={handleSearch} />
      <SearchResults
        properties={filteredProperties}
        handleFavouriteClick={handleFavouriteClick}
      />
    </>
  );
}
