import Property from "../Property/Property";

export default function SearchResultsPage() {
  return (
    <>
      <h1>Hello Search Results Page</h1>;
      <Property
        imgUrl={
          "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg"
        }
        propertyName={"23 Stanley Road LUTON, LU14 9EW"}
        bathrooms={"2"}
        bedrooms={"2"}
        cost={"200,000"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
      />
    </>
  );
}
