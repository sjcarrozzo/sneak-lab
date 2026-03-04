import toast from "react-hot-toast";

import { placeOrder } from "../firebase/db";
import { useCart } from "../context/useCart";
import { useNavigate } from "react-router";

import EmptyCart from "./EmptyCart";
import CheckoutForm from "./CheckoutForm";

function Checkout() {
  const { cart, resetCart } = useCart();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(e.currentTarget);

    const order = {
      name: formData.get("name"),
      surname: formData.get("surname"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      address: formData.get("address"),
      cart: cart,
    };

    try {
      const orderID = await placeOrder(order);

      toast.success(`Thanks for your purchase.
        Order placed successfully.
        Order N°: ${orderID}`, {
        duration: 3000,
        style: { background: "#a3f556fb" },
      });
      form.reset();
      resetCart();
      
      setTimeout(() => { navigate("/");
      }, 3000);
    } catch (error) {
      toast.error("Error placing your order. Please try again.", {
        duration: 3000,
        style: { background: "#f7b1b1fb" },
      });
    }
  };

  return cart.length === 0 ? <EmptyCart /> : <CheckoutForm handleSubmit={handleSubmit}/>;
}

export default Checkout