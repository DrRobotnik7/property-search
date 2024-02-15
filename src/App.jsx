import "./App.css";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Footer from "../src/components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";
import Favourites from "./pages/Favourites/Favourites";

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/favourites" element={<Favourites />} />
    <Route path="/results" element={<SearchResultsPage />} />
  </Route>
);

const router = createBrowserRouter(routeDefinitions);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
