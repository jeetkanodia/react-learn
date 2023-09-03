import React from "react";
import {AiFillDelete} from "react-icons/ai";
const CartItem = ({
  imgSrc,
  name,
  price,
  qty,
  decrementHandler,
  incrementHandler,
  deleteHandler,
  id,
}) => {
  return (
    <div className="cartItem">
      <img src={imgSrc} alt={name} />
      <article>
        <h3>{name}</h3>
        <p>${price}</p>
      </article>
      <div>
        <button onClick={()=>decrementHandler(id)}>-</button>
        <p>{qty}</p>
        <button onClick={()=>incrementHandler(id)}>+</button>
      </div>
      <AiFillDelete onClick={()=>deleteHandler(id)}/>
    </div>
  );
};

export default CartItem;
