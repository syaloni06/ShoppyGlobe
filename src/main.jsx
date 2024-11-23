/* eslint-disable no-unused-vars */ 
/* eslint-disable react-refresh/only-export-components */ 

import React, { lazy, StrictMode, Suspense } from "react"; // Import necessary React components and utilities
import { createRoot } from "react-dom/client"; // Import for creating the React root element
import "./index.css"; // Import the global CSS styles
import App from "./App.jsx"; // Import the main App component
import { createBrowserRouter } from "react-router-dom"; // Import for creating browser-based routing
import ProductList from "./components/ProductList.jsx"; // Import the ProductList component
import NotFound from "./components/NotFound.jsx"; // Import the NotFound component (for handling 404s)
import { RouterProvider } from "react-router-dom"; // Import RouterProvider to manage routing in the app
import { SearchProvider } from "./utils/SearchContext.jsx"; // Import context provider for search functionality
import { ProductListProvider } from "./utils/ProductListContext.jsx"; // Import context provider for product list state
import { SearchFlagProvider } from "./utils/SearchFlagContext.jsx"; // Import context provider for search flag state

// Lazy load the product detail, cart, and checkout components for better performance
const ProductDetail = lazy(() => import("./components/ProductDetail.jsx"));
const Cart = lazy(() => import("./components/Cart.jsx"));
const Checkout = lazy(() => import("./components/Checkout.jsx"));

// Define the app's router with different routes and lazy-loaded components
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Main app component
    children: [
      {
        path: "/",
        element: <ProductList />, // Route for the product list
      },
      {
        path: "/product/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProductDetail /> {/* Lazy load ProductDetail component */}
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Cart /> {/* Lazy load Cart component */}
          </Suspense>
        ),
      },
      {
        path: "/checkout",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Checkout /> {/* Lazy load Checkout component */}
          </Suspense>
        ),
      },
    ],
    errorElement: <NotFound />, // 404 route if an undefined route is accessed
  },
]);

// Render the root of the React app
createRoot(document.getElementById("root")).render(
  <StrictMode> {/* Enables strict mode for additional warnings and checks */}
    <ProductListProvider> {/* Wrap the app in the product list context provider */}
      <SearchProvider> {/* Wrap the app in the search context provider */}
        <SearchFlagProvider> {/* Wrap the app in the search flag context provider */}
          <RouterProvider router={appRouter} /> {/* Provide the app's routing */}
        </SearchFlagProvider>
      </SearchProvider>
    </ProductListProvider>
  </StrictMode>
);
