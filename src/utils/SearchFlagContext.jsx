/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react"; // Import necessary hooks for context and state management

// Create a new context for managing search flag state
export const SearchFlagContext = createContext();

// Create a provider component that will wrap around parts of the app that need access to the context
export const SearchFlagProvider = ({ children }) => {
  const [searchFlag, setSearchFlag] = useState(false); // State to manage the search flag (default is false)

  return (
    // The provider shares the search flag state and its setter function with any component that consumes this context
    <SearchFlagContext.Provider value={{ searchFlag, setSearchFlag }}>
      {children} {/* Render the children components within the provider */}
    </SearchFlagContext.Provider>
  );
};

