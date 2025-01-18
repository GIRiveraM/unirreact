import React from "react";
import CartCss from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const canItems = items.length;
  const hasItems = canItems > 0;
  const CartItems = (
    <ul className={CartCss["cart-items"]}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          quant={item.quant}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      <>
        {CartItems}
        <div className={CartCss.total}>
          <span>C. Total</span>
          <span>{total.toFixed(2)}</span>
        </div>
        <div className={CartCss.actions}>
          <button className={CartCss["button--alt"]} onClick={props.onClose}>
            Cerrar
          </button>
          {hasItems && <button className={CartCss.button}>Ordenar</button>}
        </div>
      </>
    </Modal>
  );
};

export default Cart;
