import { useEffect, useState } from "react";
import useFetch from "../utils/useFetch";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  // function filterSearchList(filteredSearchBook){
  //   setFilterBook(filteredSearchBook);
  // }
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products?limit=50"
  );
  useEffect(() => {
    if (data) {
      setProductList(data.products);
      console.log(data);
    }
  }, [data]);
  if (error) {
    return <p>Error in loading Data: {error}</p>;
  }
  if (loading) {
    return <p> Loading...</p>;
  }
  return (
    <>
      <div>
        {productList.map((product) => {
          <ProductItem product={product} key={product.id} />;
        })}
      </div>
    </>
  );
};

export default ProductList;
