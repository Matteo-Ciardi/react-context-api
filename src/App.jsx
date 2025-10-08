import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BudgetProvider } from "./context/BudgetContext";

import DefaultLayout from "./layouts/DefaultLayout";

import './App.css'

import HomePage from "./pages/homepage/HomePage";
import AboutPage from "./pages/aboutpage/AboutPage";
import ProductsPage from "./pages/productspage/ProductsPage";
import ProductDetailsPage from "./pages/productdetailspage/ProductDetailsPage";
import ShoppingBag from "./pages/shoppingbag/ShoppingBag";
import NotFound from "./pages/notfound/NotFound";

function App() {
  return (
    <BudgetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/chi-siamo" element={<AboutPage />} />
            <Route path="/prodotti">
              <Route index element={<ProductsPage />} />
              <Route path=":id" element={<ProductDetailsPage />} />
            </Route>
            <Route path="/carrello" element={<ShoppingBag />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BudgetProvider>
  )
}

export default App
