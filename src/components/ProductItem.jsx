/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
const ProductItem = (props) => {
  const dispatch = useDispatch();
  // Access the cart items from the Redux store
  const cartItems = useSelector((state) => state.cart.data);

  // Check if the product is already in the cart
  const productInCart = cartItems.find((item) => item.id === props.product.id);

  return (
    <div className="w-full sm:w-72 lg:w-60 bg-white m-5 p-1 flex flex-col rounded-lg shadow-lg hover:shadow-sky-600 hover:scale-105 overflow-hidden border-2 hover:border-sky-500">
      {/* Link wrapping the card */}
      <Link
        to={`/product/${props.product.id}`}
        state={{ product: props.product }}
      >
        {/* Product Image */}
        <img
          src={props.product.thumbnail} // Display the product's image
          alt={props.product.title} // Alt text for the image
          className="object-cover" // Style the image
        />
        <div className="p-2">
          {/* Product Title */}
          <h1 className="text-lg mb-1 font-bold truncate">
            {props.product.title}
          </h1>
          <p className="text-sm text-gray-400 mb-1 font-semibold">
            {props.product.brand}
          </p>
          {/* Product Description */}
          <p className="text-sm mb-1.5 text-gray-600 line-clamp-2">
            {props.product.description}
          </p>

          {/* Product Price */}
          <p className="text-base mb-1 text-green-600 font-bold">
            ${props.product.price}
          </p>

          {/* Product Rating */}
          <p className="flex gap-1 text-base mb-2.5 text-gray-600 font-semibold">
            Rating:
            <FaStar className="text-amber-500 self-center" />
            {props.product.rating}
          </p>
        </div>
      </Link>
      {/* Add to Cart Button */}
      <div className="p-2">
        {productInCart?.quantity > 0 ? (
          <div className="text-green-600 font-semibold">Added to the cart</div>
        ) : (
          <button
            className="flex gap-2 justify-center text-base text-white bg-sky-600 hover:bg-sky-700 w-full p-1 rounded-md font-bold"
            onClick={() => dispatch(addItem(props.product))}
          >
            Add To Cart <FaCartPlus className="text-xl self-center" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
