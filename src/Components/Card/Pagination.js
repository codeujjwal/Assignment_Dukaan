import React from "react";
import arrow from "../../assets/arrow.png";
import dots from "../../assets/dots.png";
import classes from "./style.module.css";

const Pagination = () => {
  return (
    <div className={classes.pagination}>
      <div />
      <div className={classes.pagination_row}>
        <div className={classes.active_number}>1</div>
        <text className={classes.number}>2</text>
        <text className={classes.number}>3</text>
        <div>
          <img className={classes.number} src={dots} alt="arrow" />
        </div>
        <text className={classes.number}>21</text>
      </div>
      <div>
        <text className={classes.next_text}>Next</text>
        <img src={arrow} alt="arrow" />
      </div>
    </div>
  );
};

export default Pagination;
