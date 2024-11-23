/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const SearchFlagContext = createContext();

export const SearchFlagProvider = ({ children }) => {
  const [searchFlag, setSearchFlag] = useState(false);

  return (
    <SearchFlagContext.Provider value={{ searchFlag, setSearchFlag }}>
      {children}
    </SearchFlagContext.Provider>
  );
};
