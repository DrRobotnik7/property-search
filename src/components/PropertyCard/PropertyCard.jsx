import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faShower } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";
import "./PropertyCard.css";

export default function PropertyCard({
  imgUrl,
  propertyName,
  cost,
  bedrooms,
  bathrooms,
  description,
}) {
  return (
    <>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl xl:max-w-6xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-60"
              src={imgUrl}
              alt={propertyName}
            />
          </div>
          <div className="p-8 flex flex-col">
            <p className="block mt-1 mb-3 text-xl text-left leading-tight font-bold text-primary">
              {propertyName}
            </p>
            <div className="flex flex-row items-center space-x-10">
              <p>{cost}</p>
              <span className="space-x-4">
                <FontAwesomeIcon icon={faBed} /> {bedrooms}
              </span>
              <span>
                <FontAwesomeIcon icon={faShower} />
                {bathrooms}
              </span>
            </div>
            <p className="mt-8 text-black text-left">{description}</p>
            <div className="flex mt-6 space-x-4 items-center">
              <button className="mr-2 py-2 px-4 rounded-md bg-secondary text-primary">
                Learn More
              </button>
              <span className="text-2xl">
                {<FontAwesomeIcon icon={faHeart} />}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
