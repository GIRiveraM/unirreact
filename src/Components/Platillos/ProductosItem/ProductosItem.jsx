import React from "react";
import ProdItemCss from "./ProductosItem.module.css";
import ProductosItemForm from "./ProductosItemForm";
import { addItem } from "../../../store/cartSlice";
import { useDispatch } from "react-redux";

const ProductosItem = (props) => {
  const price = `$ ${props.price.toFixed(2)} `;
  const dispatch = useDispatch();

  //funcion para recuperar información
  const addNewCart = (amount) => {
    const item = {
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    };

    dispatch(addItem(item));
  };

  return (
    <li className={ProdItemCss.proditem}>
      <div>
        <h3> {props.name} </h3>
        <div className={ProdItemCss.desciption}> {props.description}</div>
        <div className={ProdItemCss.price}> {price}</div>
      </div>
      <div>
        <ProductosItemForm id={props.id} onAddtoCart={addNewCart} />
      </div>
    </li>
  );
};

export default ProductosItem;
