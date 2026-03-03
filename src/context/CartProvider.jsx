import { useState } from "react";
import { CartContext } from "./CartContext";
import toast from "react-hot-toast";

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const existProductInCart = (product) => {
    return cart.some((cartProduct) => cartProduct.id === product.id);
  };

  const addToCart = (product) => {
    if (!existProductInCart(product)) {
      setCart([...cart, product]);
    } else {
      const updatedCart = cart.map((cartProduct) => {
        if (cartProduct.id === product.id)
          return { ...cartProduct, count: product.count };
        else return cartProduct;
      });

      setCart(updatedCart);
    }
  };

  const removeFromCart = (product) => {
    
    const updatedCart = cart.filter( cartProduct => cartProduct.id !== product.id );
    setCart(updatedCart)
    toast.success('Eliminaste el producto de tu carrito',{duration: 1000, style: {background: "#e7e2e2fb"}})

  };

  const getProductsQuantity = () => {
    return cart.reduce( (finalQuantity, cartProduct) => finalQuantity + cartProduct.count,0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, getProductsQuantity,removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
