import React from "react";
import CartItem from "./CartItem";

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
"https://neemans.com/cdn/shop/files/ND-RLSneakers-HaleBlack-_WebOptimized_a_900x.jpg?v=1691616146";



const Cart = () => {
  return (
    <div className="cart">
      <main>
        <CartItem
         imgSrc={img1}
         name={'mac'}
         price={123}
         qty={1}
         id="asdf"
         /> 
      </main>
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
