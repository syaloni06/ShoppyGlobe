import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router-dom";
import ProductDetail from "./components/ProductDetail.jsx";
import Cart from "./components/Cart.jsx";
import ProductList from "./components/ProductList.jsx";
import Checkout from "./components/Checkout.jsx";
import NotFound from "./components/NotFound.jsx";
import { RouterProvider } from "react-router-dom";
import { SearchProvider } from "./utils/SearchContext.jsx";
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
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
    errorElement: <NotFound />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SearchProvider>
      <RouterProvider router={appRouter} />
    </SearchProvider>
  </StrictMode>
);


