import NavBar from "../../components/NavBar/NavBar";
import SearchResults from "../../components/SearchResults/SearchResults";
import { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Heading from "../../components/Headings/Heading";
export default function Favourites() {
  const [favourties, setFavourites] = useState(() => {
    return JSON.parse(localStorage.getItem("favourites"));
  });

  useEffect(() => {
    if (favourties) {
      const itemToSet = [...favourties];
      localStorage.setItem("favourites", JSON.stringify(itemToSet));
    }
  }, [favourties]);

  function handleFavouriteDeselect(property) {
    const reducedFavourites = favourties.filter((favourite) => {
      return parseInt(favourite.id) !== parseInt(property.id);
    });
    console.log("Reduced", reducedFavourites);
    setFavourites(reducedFavourites);
  }

  return (
    <>
      <NavBar />
      <div className="m-8">
        <Heading>Favourites</Heading>

        {favourties !== null ? (
          <SearchResults
            properties={favourties}
            handleFavouriteClick={handleFavouriteDeselect}
          />
        ) : (
          <p>No favourites to show</p>
        )}
      </div>
      <Footer />
    </>
  );
}
