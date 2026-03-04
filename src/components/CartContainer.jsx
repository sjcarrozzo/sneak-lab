//react imports
import { useCart } from "../context/useCart";
import EmptyCart from "./EmptyCart";

//local imports
import CartList from "./CartList";

function CartContainer() {
  const { cart, resetCart } = useCart();

  const totalCart = cart.reduce(
    (acc, product) => acc + product.price * product.count,
    0,
  );

  return (
    <>
      {cart.length === 0 ? (
        <EmptyCart/>
      ) : (
        <CartList cart={cart} total={totalCart} resetCart={resetCart} />
      )}
    </>
  );
}

export default CartContainer;
