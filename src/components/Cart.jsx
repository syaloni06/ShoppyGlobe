import { useSelector } from "react-redux";
import CartItem from "./CartItem";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.data);
  console.log(cartItems);
  return (
    <>
      <div className="mt-24">
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((cart) => <CartItem cart={cart} key={cart.id} />)
        ) : (
          <p>No items in the cart.</p>
        )}
      </div>
    </>
  );
};

export default Cart;
