/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { FaMinus, FaPlus } from "react-icons/fa";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../utils/cartSlice";
import { FaTrashAlt } from "react-icons/fa";

const CartItem = (props) => {
  const dispatch = useDispatch(); // Dispatch function to handle Redux actions
  console.log(props); // Log the props for debugging purposes

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-white hover:bg-gray-100 rounded-lg shadow-lg border-2 p-4 sm:p-5 mb-4">
      {/* Thumbnail Section */}
      <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
        <img
          src={props.cart.thumbnail} // Product thumbnail image
          alt={props.cart.title} // Alt text for accessibility
          className="w-full object-cover rounded-md"
        />
      </div>

      {/* Product Details Section */}
      <div className="flex flex-col w-full sm:w-1/2 px-0 sm:px-4 gap-2 sm:gap-4 mb-4 sm:mb-0">
        {/* Product Title */}
        <h2 className="text-lg sm:text-2xl font-bold text-gray-800">
          {props.cart.title}
        </h2>

        {/* Product Brand */}
        <h2 className="text-sm sm:text-lg font-semibold italic text-gray-600">
          Brand: {props.cart.brand}
        </h2>

        {/* Product Category */}
        <h2 className="text-xs sm:text-base font-medium text-gray-400">
          Category: {props.cart.category}
        </h2>

        {/* Product Price */}
        <div className="flex items-center gap-2">
          <p className="text-green-600 font-bold text-base sm:text-xl">
            ${(props.cart.price * props.cart.quantity).toFixed(2)}{" "}
            {/* Total price */}
          </p>
          <span className="text-xs sm:text-sm text-red-500 font-bold">
            -{props.cart.discountPercentage}% {/* Discount percentage */}
          </span>
        </div>

        {/* Product Availability */}
        <p
          className={`text-xs sm:text-sm font-bold ${
            props.cart.availabilityStatus === "In Stock"
              ? "text-green-500" // Green for in stock
              : "text-red-500" // Red for out of stock
          }`}
        >
          {props.cart.availabilityStatus}
        </p>
      </div>

      {/* Quantity Controls and Remove Button */}
      <div className="flex items-center gap-4 w-full sm:w-auto">
        {/* Render quantity controls if quantity > 0 */}
        {props.cart.quantity > 0 && (
          <>
            <button
              className="p-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600"
              onClick={() => dispatch(decreaseQuantity(props.cart.id))} // Decrease quantity action
            >
              <FaMinus />
            </button>
            <p className="mx-2 sm:mx-4 text-sm sm:text-base font-semibold">
              {props.cart.quantity} {/* Current quantity */}
            </p>
            <button
              className="p-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600"
              onClick={() => dispatch(increaseQuantity(props.cart.id))} // Increase quantity action
            >
              <FaPlus />
            </button>
          </>
        )}
        {/* Remove Button */}
        <button
          className="p-2 text-gray-500 text-xl sm:text-2xl"
          onClick={() => dispatch(removeItem(props.cart.id))} // Remove item action
        >
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
