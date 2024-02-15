import parse from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faShower } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./PropertyCard.css";

export default function PropertyCard({
  id,
  imgUrl,
  propertyName,
  title,
  cost,
  bedrooms,
  bathrooms,
  description,
  listing_status,
  onIconClick,
}) {
  const parsedDescription = parse(description);

  function handleFavouriteClick() {
    const propObj = {
      id: id,
      image: imgUrl,
      title: title,
      propertyName: propertyName,
      listing_status: listing_status,
      cost: cost,
      bedrooms: bedrooms,
      bathrooms: bathrooms,
      description: parsedDescription,
    };

    onIconClick(propObj);
  }
  return (
    <>
      <div
        key={id}
        className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl xl:max-w-6xl mb-3"
      >
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-60"
              src={imgUrl}
              alt={propertyName}
            />
          </div>
          <div className="p-8 flex flex-col">
            <p className="block mt-1 mb-1 text-xl text-left leading-tight font-bold text-primary">
              {propertyName}
            </p>
            <p className="block mt-1 mb-3 text-m text-left leading-tight text-primary">
              {title}
            </p>
            <div className="flex flex-row items-center space-x-10">
              <div className="flex flex-row items-center space-x-10">
                {listing_status === "rent" ? (
                  <p>£{cost} per week</p>
                ) : (
                  <p>£{cost}</p>
                )}
              </div>

              <span className="space-x-4">
                <FontAwesomeIcon icon={faBed} /> x {bedrooms}
              </span>
              <span>
                <FontAwesomeIcon icon={faShower} /> x {bathrooms}
              </span>
            </div>
            <div className="mt-8 text-black text-left">
              <div className="line-clamp-3 overflow-hidden transition-height duration-600 ease-in-out hover:line-clamp-none">
                {description ? parsedDescription : "No description available"}
              </div>
            </div>
            <div className="flex mt-6 space-x-4 items-center">
              <button className="mr-2 py-2 px-4 rounded-md bg-secondary text-primary">
                <Link to={{ pathname: "/contact", state: { id } }}>
                  Get In Touch
                </Link>
              </button>
              <span onClick={handleFavouriteClick}>
                {<FontAwesomeIcon icon={faHeart} />}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
