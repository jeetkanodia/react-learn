import React from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { cartItems , subTotal , shipping , tax,total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const incrementHandler = (id) => {
    dispatch({
      type: "addToCart",
      payload: { id },
    });
    dispatch({
      type: "calculatePrice",
    });
  };
  const decrementHandler = (id) => {
    dispatch({
      type: "decrement",
      payload: id,
    });
    dispatch({
      type: "calculatePrice",
    });
  };
  const deleteHandler = (id) => {
    dispatch({
      type: "deleteFromCart",
      payload: id,
    });
    dispatch({
      type: "calculatePrice",
    });
  };
  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItem
              decrementHandler={decrementHandler}
              incrementHandler={incrementHandler}
              deleteHandler={deleteHandler}
              imgSrc={item.imgSrc}
              name={item.name}
              price={item.price}
              qty={item.quantity}
              id={item.id}
              key={item.id}
            />
          ))
        ) : (
          <h1>No Items Yet</h1>
        )}
      </main>
      <aside>
        <h2>Subtotal : ${subTotal}</h2>
        <h2>Shipping : ${shipping}</h2>
        <h2>Tax : ${tax}</h2>
        <h2>Total : ${total}</h2>
      </aside>
    </div>
  );
};

export default Cart;
