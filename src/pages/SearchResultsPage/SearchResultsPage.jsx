import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SearchInput from "../../components/SearchInput/SearchInput";
import SearchResults from "../../components/SearchResults/SearchResults.jsx";
import axios from "axios";
import Filters from "../../components/Filters/Filters.jsx";
import NavBar from "../../components/NavBar/NavBar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Filter from "../../components/Filter/Filter.jsx";
import Heading from "../../components/Headings/Heading.jsx";

export default function SearchResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();

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
  const [favourites, setFavourites] = useState(() => {
    return JSON.parse(localStorage.getItem("favourites"));
  });
  const [listingStatus, setListingStatus] = useState(
    location.state.listing_status
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    filterProperties();
  }, [searchFilters]);

  useEffect(() => {
    if (favourites) {
      const itemToSet = [...favourites];
      localStorage.setItem("favourites", JSON.stringify(itemToSet));
    }
  }, [favourites]);

  useEffect(() => {
    // run API call with search data from homepage
    const getData = async () => {
      if (location.state.search && location.state.listing_status) {
        await fetchProperties(
          location.state.search,
          location.state.listing_status
        );
      }
    };
    getData();
  }, []);

  const parseRawPropertiesData = (propertiesArray) =>
    //removes unwanted info from fetched data
    propertiesArray.listing.map((listing) => {
      return {
        id: listing.listing_id,
        listing_status: listing.listing_status,
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
        "X-RapidAPI-Key": "e0d751f295msh79bfb1278864fa2p183f00jsnf9fc7f48a870",
        "X-RapidAPI-Host": "zoopla.p.rapidapi.com",
      },
    };

    try {
      setLoading(true);
      const response = await axios.request(options);
      //set properties based on data received from API call
      setPropertiesArray(parseRawPropertiesData(response.data));
      // initialize properties array that can be updated based on filters
      setfilteredProperties(parseRawPropertiesData(response.data));
    } catch (error) {
      alert("Unknown location entered. Please try again");
      console.error(error);
    } finally {
      setLoading(false);
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
      window.history.replaceState({}, "");
      await fetchProperties(searchTerm, listingStatus);
    }
  }

  function testProp(prop, key, isMax) {
    // tests the property against a specific key and value in the filters array
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
        if (searchFilters[filter] !== null && searchFilters[filter] !== "") {
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
  }

  function handleFavouriteClick(property) {
    ///check if item already in favourites
    const currentFavourites = JSON.parse(localStorage.getItem("favourites"));
    let propertySavedAlready = false;

    //loop over each element in the array
    if (currentFavourites !== null) {
      for (const favourite of currentFavourites) {
        propertySavedAlready = parseInt(favourite.id) == property.id;
      }
      if (!propertySavedAlready) {
        setFavourites(() => [...currentFavourites, property]);
        alert("Property added to favourites");
      } else {
        alert("Property saved already");
      }
    } else {
      setFavourites([property]);
      alert("Property added to favourites");
    }
  }

  function handleListingTypeChange(target) {
    if (target.target.value === "") {
      setListingStatus("rent");
    } else setListingStatus(target.target.value);
  }

  return (
    <>
      <NavBar />
      <div className="text-center">
        <Heading> {searchTerm} Properties</Heading>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 mb-3">
        <div className="flex flex-col text-center px-3">
          <h3 className="mb-2">Search Other Properties</h3>

          <SearchInput onInputChange={handleSearch} width={"w-auto"} />
          <div className="mt-2">
            <Filter
              name={"Rent"}
              options={["rent", "sale"]}
              handleSelect={handleListingTypeChange}
            />
          </div>
        </div>
        <div className="col-span-3">
          <Filters rates={listingStatus} onSelect={handleFilterSelect} />
        </div>
        {/* <Button onClick=  >Reset filters</Button> */}
      </div>
      <div className="md:mb-8">
        {loading ? (
          <div className="text-center">
            <Heading>Loading...</Heading>
          </div>
        ) : (
          <SearchResults
            properties={filteredProperties}
            handleFavouriteClick={handleFavouriteClick}
          />
        )}
      </div>
      <Footer></Footer>
    </>
  );
}
