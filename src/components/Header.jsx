import { Link, useLocation } from "react-router-dom"; // Importing Link and useLocation from react-router-dom for navigation and accessing the current route
import { FaShopify } from "react-icons/fa"; // Importing Shopify icon
import { FaGlobeAsia } from "react-icons/fa"; // Importing Globe icon
import { FaCartShopping } from "react-icons/fa6"; // Importing Cart icon
import { FaSearch } from "react-icons/fa"; // Importing Search icon
import { useContext } from "react"; // Importing useContext to access context data
import { SearchContext } from "../utils/SearchContext.jsx"; // Importing SearchContext for managing search term state
import { SearchFlagContext } from "../utils/SearchFlagContext.jsx"; // Importing SearchFlagContext to handle search visibility
import { ProductListContext } from "../utils/ProductListContext.jsx"; // Importing ProductListContext for updating product lists
import { useSelector } from "react-redux"; // Importing useSelector to access Redux state
import useFetch from "../utils/useFetch.js"; // Custom hook for fetching data
const Header = () => {
  const cartItems = useSelector((state) => state.cart.data); // Fetching cart items from Redux state
  const { searchTerm, setSearchTerm } = useContext(SearchContext); // Accessing search term and its updater from context
  const { searchFlag, setSearchFlag } = useContext(SearchFlagContext); // Accessing search flag and its updater from context
  const { setProductList } = useContext(ProductListContext); // Accessing product list updater from context
  const { data } = useFetch("https://dummyjson.com/products?limit=50"); // Fetching product data using custom hook
  const location = useLocation(); // Getting current route location
  // Function to filter products based on the search term
  const searchProduct = () => {
    const searchedProduct = data.products.filter((product) => {
      const matchesSearch = searchTerm
        ? product.title?.toLowerCase().includes(searchTerm.toLowerCase()) // Check if product title includes the search term
        : true; // If no search term, return all books
      return matchesSearch;
    });
    setProductList(searchedProduct); // Update the product list with filtered products
  };
  return (
    <>
      <div className="flex justify-between bg-white text-sky-600 shadow-lg top-0 fixed w-full z-50 h-16">
        {/* Logo and Home link */}
        <Link
          to="/"
          onClick={() => {
            setSearchFlag(!searchFlag); // Toggle search flag on logo click
            setSearchTerm(""); // Reset search term
          }}
          className="flex items-center text-2xl lg:text-3xl font-bold italic mx-2 sm:mx-6"
        >
          <FaShopify className="text-4xl xl:text-5xl text-sky-600" />
          {/* Shopify icon */}
          <span className="hidden sm:inline">
            hoppyGl
            <FaGlobeAsia className="hidden sm:inline self-center" />
            {/* Globe icon */}
            be
          </span>
        </Link>
        {/* Search bar for the home page */}
        {location.pathname === "/" && (
          <div className="relative w-auto md:w-3/6 self-center">
            <input
              className="rounded-2xl p-2 h-10 border-2 text-black border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-600 md:w-full px-2 lg:px-4 pr-10"
              type="text"
              name="task"
              value={searchTerm} // Binding input value to searchTerm state
              id="task"
              placeholder="Search for products" // Placeholder for input field
              onChange={(e) => setSearchTerm(e.target.value)} // Updating searchTerm state on input change
            />
            <button
              className="absolute right-6 sm:right-4 top-1/2 transform -translate-y-1/2 text-sky-600 rounded-full h-8 w-8 flex items-center justify-center text-xl hover:scale-110"
              onClick={searchProduct} // Trigger product search on button click
            >
              <FaSearch />
              {/* Search icon */}
            </button>
          </div>
        )}
        {/* Cart and other navigation links */}
        <div className="flex items-center space-x-4 sm:space-x-10 mr-4 lg:mr-8 ">
          {/* Cart link for small screens */}
          <Link
            to={"/cart"}
            className="flex sm:hidden text-lg"
          >
            <FaCartShopping className="text-2xl" />
            {/* Cart icon */}
            {/* Display cart item count if items exist */}
            {cartItems.length > 0 && (
              <span className="absolute top-1 right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>
          {/* Cart link for larger screens */}
          <div className="hidden sm:flex space-x-3 sm:space-x-6 relative">
            <Link to={"/cart"} className="text-lg sm:text-2xl hover:scale-110">
              <div className="cursor-pointer font-semibold flex items-center gap-1 relative">
                <p className="self-start">Cart</p>
                {/* Cart Icon */}
                <FaCartShopping className="self-center text-2xl" />

                {/* Cart Number */}
                {cartItems.length > 0 && (
                  <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
