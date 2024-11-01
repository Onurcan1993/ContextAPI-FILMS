import React from "react";
import { ScCartItem, ScCartItemDetails } from "./scParts";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import useLocalStorage from "../hooks/useLocalStorage";

const Item = (props) => {
  const [value, setValue] = useLocalStorage("s11g1", props);
  const { removeItem } = useContext(CartContext);
  return (
    <ScCartItem>
      <img src={value.image} alt={`${value.title} book`} />

      <ScCartItemDetails>
        <h2>{value.title}</h2>
        <p>$ {value.price}</p>
        <button onClick={() => removeItem(value.id)}>Remove from cart</button>
      </ScCartItemDetails>
    </ScCartItem>
  );
};

export default Item;
