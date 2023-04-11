import "./App.module.scss";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "../../containers/Navbar/Navbar";
import Footer from "../../containers/Footer/Footer";
import PageHome from "../../pages/PageHome/PageHome";
import PageContact from "../../pages/PageContact/PageContact";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageHome />} />
        </Routes>
        <Routes>
          <Route path="/contact" element={<PageContact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
