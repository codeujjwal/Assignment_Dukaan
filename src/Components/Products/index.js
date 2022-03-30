import React from "react";
import classes from "./style.module.css";
import Card from "./Card";
import box1 from "../../assets/box1.png";
import box2 from "../../assets/box2.png";
import box3 from "../../assets/box3.png";
import box4 from "../../assets/box4.png";

const Products = () => {
  return (
    <div className={classes.Products_container}>
      <text className={classes.products_heading}>
        Try our other free products
      </text>
      <div className={classes.cards_container}>
        <Card
          logo={box1}
          title="Privacy Policy Generator"
          content="Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging."
        />
        <Card
          logo={box2}
          title="Terms & Conditions Generator"
          content="Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging."
        />
        <Card
          logo={box3}
          title="Domain Name Generator"
          content="Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging."
        />
        <Card
          logo={box4}
          title="Invoice Generator"
          content="Invoice Generator Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging."
        />
      </div>
    </div>
  );
};

export default Products;
