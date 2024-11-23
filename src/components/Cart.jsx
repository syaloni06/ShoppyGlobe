import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import { BsSendCheckFill } from "react-icons/bs";
import { MdRemoveShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const Cart = () => {
  // Accessing cart items from the Redux store
  const cartItems = useSelector((state) => state.cart.data);

  // State to hold the total cart amount
  const [cartTotal, setCartTotal] = useState();

  // Calculate the total amount whenever cart items change
  useEffect(() => {
    let total = 0;

    // Calculate total price for all items in the cart
    cartItems.map((cart) => {
      total += cart.price * cart.quantity;
    });

    // Update the cartTotal state with the calculated total (rounded to 2 decimals)
    setCartTotal(total.toFixed(2));
  }, [cartItems]);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-24 mx-4 lg:mx-10">
        {/* Cart Items Section */}
        <div className="lg:col-span-2">
          {cartItems && cartItems.length > 0 ? (
            // Render each cart item using the CartItem component
            cartItems.map((cart) => <CartItem cart={cart} key={cart.id} />)
          ) : (
            // Display a message when the cart is empty
            <>
              <p className="flex items-center gap-4 text-2xl md:text-4xl text-gray-500">
                Opps! No items in the cart.
                <MdRemoveShoppingCart className="text-2xl md:text-4xl" />
              </p>
            </>
          )}
        </div>

        {/* Cart Total Section */}
        {cartItems && cartItems.length > 0 && (
          <div className="flex justify-center md:items-center lg:items-start min-w-screen">
            {/* Total Amount and Checkout Button */}
            <div className="p-4 bg-gray-100 rounded-lg shadow-md w-full md:w-2/3 lg:w-full h-48 flex flex-col justify-center gap-10">
              {/* Display Total Amount */}
              <div className="flex gap-3">
                <p className="text-2xl font-bold text-gray-700">
                  Total Amount:
                </p>
                <p className="text-2xl font-bold text-green-600">
                  ${cartTotal}
                </p>
              </div>

              {/* Checkout Button */}
              <Link to={"/checkout"}>
                <button className="flex gap-2 justify-center text-white text-xl bg-sky-600 hover:bg-sky-700 w-full py-3 rounded-md font-bold">
                  Checkout <BsSendCheckFill className="text-2xl" />
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
