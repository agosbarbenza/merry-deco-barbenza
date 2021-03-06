import React, { useContext } from "react";
import { CartWidget } from "../CartWidget/CartWidget";
import { FaHollyBerry } from "react-icons/fa";
import { Link } from "react-router-dom";
import { cartContext } from "../Context/CartProvider";

export function NavBar() {
  const { cart } = useContext(cartContext);
  const categories = [
    { id: 1, category: "trees", name: "Trees" },
    { id: 2, category: "lights", name: "Lights" },
    { id: 3, category: "ornaments", name: "Ornaments and Accesories" },
    { id: 4, category: "kitchenwear", name: "Kitchenwear and Tablewear" },
    { id: 5, category: "homedecor", name: "Home Decor" },
  ];
  const cartCount = cart.map((item) => item.count).reduce((x, y) => x + y, 0);
  return (
    <div className="containerNavBar">
      <Link className="titleStyleNav" to={`/`}>
        <div className="logo">
          <FaHollyBerry style={{ fontSize: "3rem", color: "green" }} />
          <h1 className="title">Merry Deco</h1>
        </div>
      </Link>
      <ul className="containerList">
        <Link className="titleStyleNav" to={`/`}>
          <li className="listItem titleStyleNav">Home</li>
        </Link>
        {categories.map((item, key) => (
          <Link
            className="listItem titleStyleNav"
            to={`/category/${item.category}`}
            key={item.id}
          >
            {item.name}
          </Link>
        ))}
        <Link className="titleStyleNav" to={`/cart`}>
          <CartWidget size="6rem" color="pink" />
          <p className="cartItems">{cartCount}</p>
        </Link>
      </ul>
    </div>
  );
}
