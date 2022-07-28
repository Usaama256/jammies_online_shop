import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import { PrivateRoutesAdmin, PrivateRoutesLogin } from "./PrivateRoutes";
import AdmiDashboard from "../pages/AdmiDashboard";
import Home from "../pages/Home";
import ProductsList from "../pages/ProductsList";
import Product from "../pages/Product";
import Signin from "../pages/Signin";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import PageNotFound from "../pages/PageNotFound";

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/products/:category" element={<ProductsList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route
          path="/login"
          element={
            <PrivateRoutesLogin>
              <Signin />
            </PrivateRoutesLogin>
          }
        />
        <Route
          path="/register"
          element={
            <PrivateRoutesLogin>
              <Register />
            </PrivateRoutesLogin>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/admin"
          element={
            <PrivateRoutesAdmin>
              <AdmiDashboard />
            </PrivateRoutesAdmin>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutes;
