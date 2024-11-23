/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react"; // Importing necessary hooks to manage context and state

// Creating a context for managing the product list across the application
export const ProductListContext = createContext();

// Defining the provider component to wrap the parts of the app that need access to the product list
export const ProductListProvider = ({ children }) => {
  // Initializing the productList state to hold an empty array by default
  const [productList, setProductList] = useState([]); 

  return (
    <ProductListContext.Provider value={{ productList, setProductList }}>
      {/* Passing the product list state and setter function to the children components */}
      {children}
    </ProductListContext.Provider>
  );
};
