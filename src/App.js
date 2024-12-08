import "./App.css";
import Home from "./Combonents/Bages/Home";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Combonents/Layout/Layout";
import Contact from "./Combonents/Contact/Contact";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
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
