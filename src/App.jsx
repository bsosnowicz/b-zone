import Navigation from "./components/Navigation/Navigation";
import HomePage from "./components/HomePage/HomePage";
import AboutUs from "./components/AboutUs/AboutUs";
import Schedule from "./components/Schedule/Schedule";
import { Route, Routes } from "react-router-dom";
import Pricelist from "./components/SignUp/Pricelist";
import Gallery from "./components/Gallery/Gallery";

export const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="pricelist" element={<Pricelist />} />
        <Route path="gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
};
