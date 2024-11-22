import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import { BsSendCheckFill } from "react-icons/bs";
import { MdRemoveShoppingCart } from "react-icons/md";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.data);
  const [cartTotal, setCartTotal] = useState();
  useEffect(() => {
    let total = 0;
    cartItems.map((cart) => {
      total += cart.price * cart.quantity;
    });
    setCartTotal(total.toFixed(2));
  }, [cartItems]);
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-24 mx-4 lg:mx-10">
        {/* Cart Items Section */}
        <div className="lg:col-span-2">
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((cart) => <CartItem cart={cart} key={cart.id} />)
          ) : (
            <>
              <p className="flex items-center gap-4 text-4xl text-gray-500">
                Opps! No items in the cart.
                <MdRemoveShoppingCart />
              </p>
            </>
          )}
        </div>

        {/* Cart Total Section */}
        {cartItems && cartItems.length > 0 && (
          <div className="p-4 bg-gray-100 rounded-lg shadow-md h-48 flex flex-col justify-center gap-10">
            <div className="flex gap-3">
              <p className="text-2xl font-bold text-gray-700">Cart Total:</p>
              <p className="text-2xl font-bold text-green-600">${cartTotal}</p>
            </div>
            <button className="flex gap-2 justify-center text-white text-xl bg-sky-600 hover:bg-sky-700 w-full py-3 rounded-md font-bold">
              Checkout <BsSendCheckFill className="text-2xl" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
