import "./App.css";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import NavBar from "../src/components/NavBar/NavBar";
import Footer from "../src/components/Footer/Footer";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import SearchResultsPage from "./pages/SearchResultsPage";

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/results" element={<SearchResultsPage />} />
  </Route>
);

const router = createBrowserRouter(routeDefinitions);

function App() {
  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
