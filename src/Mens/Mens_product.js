import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Mens.module.css";

function Mens_product({ product }) {
  const [on, setOn] = useState(false);
  const [img, setImg] = useState(product.img);
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const mouseOn = () => {
    setImg(product.img2);
    setName(product.name2);
    setPrice(product.type);
    setOn(true);
  };
  const mouseOff = () => {
    setImg(product.img);
    setName(product.name);
    setPrice(product.price);
    setOn(false);
  };
  return (
    <div className={styles.box} onMouseOver={mouseOn} onMouseLeave={mouseOff}>
      <div className={styles.pic}>
        <img src={img}></img>
      </div>
      <div className={styles.detail}>
        <p className={on ? styles.detail_nameOn : styles.detail_nameOff}>
          {name}
        </p>
        <div className={styles.detail_price}>{price}</div>
      </div>
    </div>
  );
}

export default Mens_product;
