import React from "react";
import CartItemCss from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { addItem, removerItem } from "../../store/cartSlice";
import { incrementByOne, decrementByOne } from "../../store/counterSlice";

const CartItem = (props) => {
  const { name, price, quant, id } = props;

  const dispatch = useDispatch();
  const totalItem = price * quant;

  const onAdd = () => {
    dispatch(addItem({ ...props, amount: 1 }));
    dispatch(incrementByOne(quant));
  };

  const onRemove = () => {
    dispatch(removerItem(id));
    dispatch(decrementByOne(quant));
  };

  return (
    <li className={CartItemCss["cart-item"]}>
      <div>
        <h2> {name} </h2>
        <div className={CartItemCss.summary}>
          <span className={CartItemCss.price}>${price.toFixed(2)}</span>
          <span className={CartItemCss.quant }> X {quant}</span>
          <span className={CartItemCss.amount}>{new Intl.NumberFormat('es-MX', {style:'currency', currency:'MXN'}).format(totalItem)}</span>
        </div>
      </div>
      <div className={CartItemCss.actions}>
        <button onClick={onRemove}>-</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
