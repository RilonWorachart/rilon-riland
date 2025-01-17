import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import CatalogPage from "./pages/CatalogPage.js";
import ItemPage from "./pages/ItemPage.js";
import FormPage from "./pages/FormPage.js";
import FixedButton from "./components/FixedButton.js";
import ScrollToTop from "./utils/ScrollToTop.js";


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <FixedButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />}/>
        <Route path="/catalog/item/:id" element={<ItemPage />} />
        <Route path="/catalog/item/:id/request-form" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
