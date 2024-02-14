import PropertyCard from "../PropertyCard/PropertyCard";
export default function SearchResults({ properties }) {
  return (
    <>
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          imgUrl={property.image}
          propertyName={property.address}
          title={property.title}
          cost={property.cost}
          bedrooms={property.bedrooms}
          bathrooms={property.bathrooms}
          description={property.description}
          status={property.status}
        />
      ))}
    </>
  );
}
