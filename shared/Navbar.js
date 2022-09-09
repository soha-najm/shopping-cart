import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
// context
import { CartContext } from "../Context/CartContextProvider";
//  icons
import cartIcon from "../assets/cart.svg";
const Navbar = () => {
  const { state } = useContext(CartContext);

  return (
    <div className={styles.mainContainer}>
    <div className={styles.container}>
        <Link className={styles.productLink} to="/products">products</Link>
        <div className={styles.iconContainer}>
          <Link to="/cart">
            <img src={cartIcon} alt="cart" width={"30px"} />{" "}
          </Link>
          <span>{state.itemsCounter}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
