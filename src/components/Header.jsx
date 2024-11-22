import { Link, useLocation } from "react-router-dom";
import { FaShopify } from "react-icons/fa";
import { FaGlobeAsia } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useContext } from "react";
import { SearchContext } from "../utils/SearchContext.jsx";
import { ProductListContext } from "../utils/ProductListContext.jsx";
import useFetch from "../utils/useFetch.js";
const Header = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const {setProductList} = useContext(ProductListContext);
  const { data } = useFetch("https://dummyjson.com/products?limit=50");
  const location = useLocation();
  const searchProduct = () => {
    const searchedProduct = data.products.filter((product) => {
      const matchesSearch = searchTerm
        ? product.title?.toLowerCase().includes(searchTerm.toLowerCase()) 
        : true; // If no search term, return all books
      return matchesSearch;
    });
    setProductList(searchedProduct);
    // setSearchTerm(""); 
  }
  return (
    <>
      <div className="flex justify-between bg-white text-sky-500 shadow-lg top-0 fixed w-full z-50 h-10 sm:h-16">
        <Link to={"/"} onClick={() => setSearchTerm("")} className="flex items-center text-lg sm:text-3xl font-bold italic mx-4 sm:mx-6">
          <FaShopify className="self-center" />
          hoppyGl
          <FaGlobeAsia className="self-center" />
          be
        </Link>
        {location.pathname === "/" && <div className="relative w-full sm:w-2/3 self-center">
          <input
            className="rounded-2xl p-2 h-10 border-2 border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-600 w-full px-4 pr-10" 
            type="text"
            name="task"
            value={searchTerm}
            id="task"
            placeholder="Search for products"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sky-500 rounded-full h-8 w-8 flex items-center justify-center text-xl hover:scale-110" onClick={searchProduct}>
            <FaSearch />
          </button>
        </div>}

        <div className="flex items-center space-x-4 sm:space-x-10 mr-4 lg:mr-8 ">
          <Link
            to={"/cart"}
            className="block sm:hidden text-lg hover:scale-110"
          >
            <FaCartShopping className="text-2xl" />
          </Link>

          <div className="hidden sm:flex space-x-3 sm:space-x-6">
            <Link to={"/cart"} className="text-lg sm:text-2xl hover:scale-110">
              <p className="cursor-pointer font-semibold flex gap-1">
                <FaCartShopping className="self-center" />
                Cart
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
