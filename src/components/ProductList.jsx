/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext} from "react";
import useFetch from "../utils/useFetch";
import ProductItem from "./ProductItem";
import { ProductListContext } from "../utils/ProductListContext";
import { SearchFlagContext } from "../utils/SearchFlagContext";
const ProductList = () => { 
  const { productList, setProductList} = useContext(ProductListContext);
//  const [products, setProducts] = useState([]);
//  const [filteredProducts, setFilteredProducts] = useState([]);
  const { data, error, loading } = useFetch("https://dummyjson.com/products?limit=50");
  const { searchFlag } = useContext(SearchFlagContext);
  useEffect(() => {
    if (data) {
      setProductList(data.products);
      // console.log(data);
      // setFilteredProducts(data.products);
    }
  },[data,searchFlag]);
  if (error) {
    return <p>Error in loading Data: {error}</p>;
  }
  if (loading) {
    return <p> Loading...</p>;
  }
  return (
    <>
      <div className="flex flex-wrap justify-center my-20">
        {productList.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default ProductList;