import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { FaStar } from "react-icons/fa6";

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();

  // Access the product data from location state
  const product = location.state?.product;

  // Get cart items from Redux
  const cartItems = useSelector((state) => state.cart.data);

  // Check if the product is already in the cart
  const productInCart = cartItems.find((item) => item.id === Number(id));

  if (!product) {
    return <p>Product data not found. Please go back to the product list.</p>;
  }

  return (
    <>
      <div className=" flex mx-10 bg-white rounded-lg shadow-lg border-2 p-5 mt-20">
        <div>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-60 object-cover rounded-md mb-4"
          />

          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-sm text-gray-400 mb-2 font-semibold">
            {product.brand}
          </p>
        </div>
        <div>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-xl text-green-600 font-bold mb-2">
            ${product.price}
          </p>
          <p className="flex items-center text-lg text-gray-600 mb-4">
            <FaStar className="text-amber-500 mr-1" />
            {product.rating}
          </p>
          {productInCart?.quantity > 0 ? (
            <p className="text-green-600 font-semibold">Already in the cart</p>
          ) : (
            <button
              className="text-white bg-sky-600 w-full py-2 rounded-md font-bold"
              onClick={() => dispatch(addItem(product))}
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
