import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import ScrollToTop from './components/ScrollToTop.js';
import HomePage from "./pages/HomePage.js";
import CatalogPage from "./pages/CatalogPage.js";
import ItemPage from "./pages/ItemPage.js";
import FormPage from "./pages/FormPage.js";
import BackToTopButton from "./components/BackToTopButton.js";


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />}/>
        <Route path="/catalog/:id" element={<ItemPage />} />
        <Route path="/catalog/:id/request-form" element={<FormPage />} />
      </Routes>
      <BackToTopButton />
    </BrowserRouter>
  );
}

export default App;
