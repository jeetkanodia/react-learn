import React from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";


const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();


  const incrementHandler = (id) => {
    dispatch({
      type: "addToCart",
      payload: {id}
    })
  };
  const decrementHandler = (id) => {
    dispatch({
      type: "decrement",
      payload: id
    });
  };
  const deleteHandler = (id) => {};
  return (
    <div className="cart">
      <main> 
      { cartItems.length > 0 ? 
       (
        cartItems.map((item) => (
          <CartItem 
          decrementHandler={decrementHandler}
          incrementHandler={incrementHandler}
          deleteHandler={deleteHandler}
           imgSrc={item.imgSrc} name={item.name} price={item.price} qty={item.quantity} id={item.id} key={item.id} />
        ))): 
        <h1>No Items Yet</h1>
      }</main>
      <aside>
        <h2>Subtotal : ${49}</h2>
        <h2>Shipping : ${5}</h2>
        <h2>Tax : ${10}</h2>
        <h2>Total : ${100}</h2>
      </aside>
    </div>
  );
};

export default Cart;
