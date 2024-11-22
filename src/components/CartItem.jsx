/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { FaMinus, FaPlus } from "react-icons/fa";
import { decreaseQuantity, increaseQuantity } from "../utils/cartSlice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  console.log(props);
  return (
    <div className="flex items-center justify-between bg-white hover:bg-gray-100 rounded-lg shadow-lg border-2 p-16 mb-4">
      {/* Thumbnail */}
      <div className="w-1/4">
        <img
          src={props.cart.thumbnail}
          alt={props.cart.title}
          className=" object-cover rounded-md"
        />
      </div>

      {/* Title and Price */}
      <div className="flex flex-col w-1/2 px-4 gap-4">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800">{props.cart.title}</h2>

        {/* Brand */}
        <h2 className="text-lg font-semibold italic text-gray-600">
          Brand: {props.cart.brand}
        </h2>

        {/* Category */}
        <h2 className="text-base font-medium text-gray-400">
          Category: {props.cart.category}
        </h2>

        {/* Price */}
        <div className="flex items-center gap-2">
          <p className="text-green-600 font-bold text-xl">
            ${(props.cart.price * props.cart.quantity).toFixed(2)}
          </p>
          <span className="text-sm text-red-500 font-bold">
            -{props.cart.discountPercentage}%
          </span>
        </div>

        {/* Availability */}
        <p
          className={`text-sm font-bold ${
            props.cart.availabilityStatus === "In Stock"
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {props.cart.availabilityStatus}
        </p>
      </div>

      {/* Quantity Controls */}
      {props.cart.quantity === 0 ? (
        <></>
      ) : (
        <>
          <div className="flex items-center">
            <button
              className="p-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600"
              onClick={() => dispatch(decreaseQuantity(props.cart.id))}
            >
              <FaMinus />
            </button>
            <p className="mx-4 text-base font-semibold">
              {props.cart.quantity}
            </p>
            <button
              className="p-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600"
              onClick={() => dispatch(increaseQuantity(props.cart.id))}
            >
              <FaPlus />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartItem;
