import { React, useEffect, useState } from "react";
import HeaderCartBtnCss from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useSelector } from "react-redux";

const HeaderCartButton = (props) => {
  const [btnIsHighLigthed, setBtnIsHighLigthed] = useState(false);
  const value = useSelector((state) => state.counter.initialValue);
  const items = useSelector((state) => state.cart.items);
  
  const btnClases = `${HeaderCartBtnCss.button} ${
    btnIsHighLigthed ? HeaderCartBtnCss.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighLigthed(true);
    const timer = setTimeout(() => {
      setBtnIsHighLigthed(false);
    }, 300);
  }, [items]);

  return (
    <>
      <button className={btnClases} onClick={props.onClick}>
        <span className={HeaderCartBtnCss.icon}>
          <CartIcon />
        </span>
        <span className={HeaderCartBtnCss.badge}> {value} </span>
      </button>
    </>
  );
};

export default HeaderCartButton;
