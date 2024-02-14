import SearchResults from "../../components/SearchResults/SearchResults";
import { useState, useEffect } from "react";

export default function Favourites() {
  const [favourties, setFavourites] = useState(
    JSON.parse(localStorage.getItem("favourites"))
  );

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourties));
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
      <h2>Favourites</h2>
      <SearchResults
        properties={favourties}
        handleFavouriteClick={handleFavouriteDeselect}
      />
    </>
  );
}
