import React from "react";
import classes from "./style.module.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className={classes.header_container}>
      <img className={classes.logo} src={logo} alt="logo" />
      <div className={classes.sub_container}>
        <text className={classes.signin_button}>Sign In</text>
        <button className={classes.pc_button}>Dukaan for PC</button>
      </div>
    </div>
  );
};

export default Header;
