import PropertyCard from "../../components/PropertyCard/PropertyCard";

// import { useState, useEffect } from 'react';
// const Fetch = () => {
//   const [photos, setPhotos] = useState([]);
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/photos')
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         console.log(data);
//         setPhotos(data);
//       });
//   }, [searchInput]); // This should be whenever the user hits enter so whenever that changes the fetch reruns
//   return (
//     <div>
      
//       {photos.map((photo) => (
//         <img key={photo.id} src={photo.url} alt={photo.title} width={100} />
//       ))}
//     </div>
//   );
// };
// export default Fetch;

const handleSearch = () => {
  // take the value of the search input
  // run the API call with search input value in the URL
  // update the local variable that stores the property cards, using useState
  // map through the array of properties and return property cards for each item
}


export default function SearchResultsPage() {
  return (
    <>
      <h1>Hello Search Results Page</h1>;
      <PropertyCard
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
