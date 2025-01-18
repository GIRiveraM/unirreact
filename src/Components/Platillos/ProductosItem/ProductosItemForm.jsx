import React, { useRef, useState } from "react";
import ProdItemCss from "./ProductosItem.module.css";
import Input from "../../UI/Input";
import { useDispatch } from "react-redux";
import { increment } from "../../../store/counterSlice";
import { addItem } from "../../../store/cartSlice";

const ProductosItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const numberInputRef = useRef();
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = numberInputRef.current.value;
    const amount = +enteredAmount;
    if (amount === 0 || amount < 1 || amount > 5) {
      setAmountIsValid(false);
      return;
    }
    setAmountIsValid(true);
    props.onAddtoCart(amount);
    dispatch(increment(amount));
  };

  return (
    <>
      <form className={ProdItemCss.form} onSubmit={submitHandler} noValidate>
        <Input
          label="Monto:"
          ref={numberInputRef}
          input={{
            id: "monto",
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>+ Agregar</button>
        {!amountIsValid && <p>Favor de ingresar una monto entre 1 -5</p>}
      </form>
    </>
  );
};

export default ProductosItemForm;
