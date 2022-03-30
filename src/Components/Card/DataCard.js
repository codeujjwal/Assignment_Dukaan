import React from "react";
import classes from "./style.module.css";

const DataCard = ({ data }) => {
  return (
    <div className={classes.card_container}>
      <text className={classes.data_text}>{data}</text>
    </div>
  );
};

export default DataCard;
