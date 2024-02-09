import PropertyCard from "../PropertyCard/PropertyCard";
export default function SearchResults({ properties }) {
  return (
    <>
      {properties.map((property) => (
        <PropertyCard
          key={property.address}
          imgUrl={property.image}
          propertyName={property.address}
          cost={property.cost}
          bedrooms={property.bedrooms}
          bathrooms={property.bathrooms}
          description={property.description}
        />
      ))}
    </>
  );
}
