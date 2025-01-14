import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import ScrollToTop from './components/ScrollToTop.js';
import HomePage from "./pages/HomePage.js";
import DetailPage from "./pages/DetailPage.js";
import FormPage from "./pages/FormPage.js";
import BackToTopButton from "./components/BackToTopButton.js";


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/Form/:id" element={<FormPage />} />
      </Routes>
      <BackToTopButton />
    </BrowserRouter>
  );
}

export default App;
