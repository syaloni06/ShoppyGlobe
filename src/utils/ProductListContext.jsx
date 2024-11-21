/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ProductListContext = createContext();

export const ProductListProvider = ({ children }) => {
  const [productList, setProductList] = useState([]); 

  return (
    <ProductListContext.Provider value={{ productList, setProductList }}>
      {children}
    </ProductListContext.Provider>
  );
};
