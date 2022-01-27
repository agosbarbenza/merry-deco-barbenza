import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ItemCount({ stock, initial }) {
  const [productCount, setProductCount] = useState(initial);
  let items = "";
  productCount == 1 ? (items = "item") : (items = "items");

  function addItemToCart() {
    if (stock > 0 && productCount < stock) {
      setProductCount(parseInt(productCount) + 1);
    }
  }

  function subtractItemFromCart() {
    if (productCount > initial) {
      setProductCount(parseInt(productCount) - 1);
    }
  }

  function handleCartClick(productCount, items) {
    toast.success(
      "You have added " + productCount + " " + items + " to your cart!"
    );
  }

  return (
    <div id="itemCountContainer" className="itemCountContainer">
      <div className="lessMore" id="lessMore">
        <button
          onClick={() => subtractItemFromCart()}
          className="lessMoreBtn"
          id="less"
        >
          -
        </button>
        <p className="qty">{productCount}</p>
        <button
          onClick={() => addItemToCart()}
          className="lessMoreBtn"
          id="more"
        >
          +
        </button>
      </div>
      <button
        className="addBtn"
        id="addBtn"
        onClick={() => handleCartClick(productCount, items)}
      >
        Add to cart
      </button>
      <ToastContainer />
    </div>
  );
}
