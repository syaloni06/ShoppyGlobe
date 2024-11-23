/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import React, { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router-dom";
import ProductList from "./components/ProductList.jsx";
import NotFound from "./components/NotFound.jsx";
import { RouterProvider } from "react-router-dom";
import { SearchProvider } from "./utils/SearchContext.jsx";
import { ProductListProvider } from "./utils/ProductListContext.jsx";
import { SearchFlagProvider } from "./utils/SearchFlagContext.jsx";

// Lazy load the product detail component
const ProductDetail = lazy(() => import("./components/ProductDetail.jsx"));
const Cart = lazy(() => import("./components/Cart.jsx"));
const Checkout = lazy(() => import("./components/Checkout.jsx"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProductList />,
      },
      {
        path: "/product/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProductDetail />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/checkout",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Checkout />
          </Suspense>
        ),
      },
    ],
    errorElement: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductListProvider>
      <SearchProvider>
        <SearchFlagProvider>
          <RouterProvider router={appRouter} />
        </SearchFlagProvider>
      </SearchProvider>
    </ProductListProvider>
  </StrictMode>
);
