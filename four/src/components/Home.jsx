import React from "react";
import ProductCard from "./ProductCard";
import toast from "react-hot-toast"
import { useDispatch } from "react-redux";

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
"https://neemans.com/cdn/shop/files/ND-RLSneakers-HaleBlack-_WebOptimized_a_900x.jpg?v=1691616146";



const Home = () => {
  const dispatch = useDispatch();
  const productList = [
    { name: "MacBook", price: 1250, imgSrc: img1, id: "adadadadadad" },
    { name: "Shoes", price: 49, imgSrc: img2 , id: "adasdadadadadad" },
  ];

  const addToCartHandler = (options) => {
    dispatch({
      type:'addToCart',
      payload:options
    })
    toast.success("Added to Cart")
  };
  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          name={i.name}
          key={i.id}
          handler={addToCartHandler}
          id={i.id}
          imgSrc={i.imgSrc}
          price={i.price}
        />
      ))}
    </div>
  );
};

export default Home;
