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
      <div>
        <div>
          <img src={imgUrl} alt={propertyName} />
        </div>
        <div>
          <h2>{propertyName}</h2>
          <p>
            {cost}
            <span>
              <FontAwesomeIcon icon={faBed} /> x{bedrooms}
            </span>
            <span>
              <FontAwesomeIcon icon={faShower} />
              {bathrooms}
            </span>
          </p>
          <p>Description: {description}</p>
        </div>
        <div>
          <Button>Learn More</Button>
          <span>{<FontAwesomeIcon icon={faHeart} />}</span>
        </div>
      </div>
    </>
  );
}
