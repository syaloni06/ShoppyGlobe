/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from "react";
import useFetch from "../utils/useFetch";
import ProductItem from "./ProductItem";
import { ProductListContext } from "../utils/ProductListContext";
import { SearchFlagContext } from "../utils/SearchFlagContext";

const ProductList = () => {
  // Using useContext to get product list and setter function from ProductListContext
  const { productList, setProductList } = useContext(ProductListContext);

  // Custom hook to fetch data from API, including loading and error states
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products?limit=50"
  );

  // Using useContext to access search flag from SearchFlagContext
  const { searchFlag } = useContext(SearchFlagContext);

  // useEffect hook to update the product list when data is fetched or searchFlag changes
  useEffect(() => {
    if (data) {
      setProductList(data.products); // Setting the fetched product list
    }
  }, [data, searchFlag]); // Dependency array ensures update on data or searchFlag change

  // Handling error state if fetching fails
  if (error) {
    return <p>Error in loading Data: {error}</p>;
  }

  // Handling loading state while data is being fetched
  if (loading) {
    return <p> Loading...</p>;
  }

  return (
    <>
      <div className="flex flex-wrap justify-center my-20">
        {/* Rendering the list of products, passing each product as a prop to ProductItem */}
        {productList.length === 0 && <div className="flex items-center gap-4 text-2xl md:text-4xl text-gray-500">Opps! No product found</div>}{/* Checking the searched product is exist or not */}
        {productList.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
