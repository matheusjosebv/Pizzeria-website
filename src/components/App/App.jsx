import "./App.module.scss";
import ScrollToTop from "../../hooks/ScrollToTop";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Navbar from "../../containers/Navbar/Navbar";
import Footer from "../../containers/Footer/Footer";
import PageHome from "../../pages/PageHome/PageHome";
import PageMenu from "../../pages/PageMenu/PageMenu";
import PageAbout from "../../pages/PageAbout/PageAbout";
import PageOffers from "../../pages/PageOffers/PageOffers";
import PageContact from "../../pages/PageContact/PageContact";
import PageNotFound from "../../pages/PageNotFound/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route index element={<PageHome />} />
          <Route path="/menu" element={<PageMenu />} />
          <Route path="/offers" element={<PageOffers />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/contact" element={<PageContact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
