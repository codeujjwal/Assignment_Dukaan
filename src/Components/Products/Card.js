import React from "react";
import classes from "./style.module.css";

const Card = ({ title, logo, content }) => {
  return (
    <div className={classes.card_container}>
      <img className={classes.card_logo} src={logo} alt="logo" />
      <text className={classes.card_title}>{title}</text>
      <text className={classes.card_content}>{content}</text>
    </div>
  );
};

export default Card;
