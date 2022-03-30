import React from "react";
import classes from "./style.module.css";

const CopyCard = () => {
  return (
    <div className={classes.copy_container}>
      <text className={classes.copy_text}>Click to copy</text>
      <text className={classes.copy_text}>Copied!</text>
    </div>
  );
};

export default CopyCard;
