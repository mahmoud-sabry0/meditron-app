import "./App.css";
import Navbars from "./Combonents/Nav/Navbar";
import Home from "./Combonents/Bages/Home";
import Footer from "./Combonents/Footer/Footer";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layaut from "./Combonents/Layaut/Layaut";
import Contact from "./Combonents/Contact/Contact";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layaut />}>
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
