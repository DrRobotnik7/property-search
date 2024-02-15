import NavBar from "../../components/NavBar/NavBar";
import SearchResults from "../../components/SearchResults/SearchResults";
import { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
export default function Favourites() {
  const [favourties, setFavourites] = useState(() => {
    return JSON.parse(localStorage.getItem("favourites"));
  });

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
      <NavBar />
      <h2>Favourites</h2>

      {favourties !== null ? (
        <SearchResults
          properties={favourties}
          handleFavouriteClick={handleFavouriteDeselect}
        />
      ) : (
        <div className="flex items-center justify-center h-screen">
          <h3>No favourties to show</h3>
        </div>
      )}
      <Footer />
    </>
  );
}
