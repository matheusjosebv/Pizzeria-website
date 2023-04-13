import "./App.module.scss";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Navbar from "../../containers/Navbar/Navbar";
import Footer from "../../containers/Footer/Footer";
import PageHome from "../../pages/PageHome/PageHome";
import PageMenu from "../../pages/PageMenu/PageMenu";
import PageAbout from "../../pages/PageAbout/PageAbout";
import PageOffers from "../../pages/PageOffers/PageOffers";
import PageContact from "../../pages/PageContact/PageContact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<PageHome />} />
        </Routes>
        <Routes>
          <Route path="/menu" element={<PageMenu />} />
        </Routes>
        <Routes>
          <Route path="/offers" element={<PageOffers />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<PageAbout />} />
        </Routes>
        <Routes>
          <Route path="/contact" element={<PageContact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
