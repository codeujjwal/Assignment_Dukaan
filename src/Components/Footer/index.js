import React from "react";
import classes from "./style.module.css";
import flag from "../../assets/flag.png";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className={classes.footer_container}>
      <div className={classes.rowTop}>
        <img className={classes.logo} src={logo} alt="logo" />
        <ul>
          <li>Contact</li>
          <li>Faq's</li>
        </ul>
        <ul>
          <li>Tutorials</li>
          <li>Blog</li>
        </ul>
        <ul>
          <li>Privacy</li>
          <li>Banned items</li>
        </ul>
        <ul>
          <li>About</li>
          <li>Jobs</li>
        </ul>
        <ul>
          <li>Facebook</li>
          <li>Linkedin</li>
          <li>Twitter</li>
        </ul>
      </div>
      <div className={classes.line} />
      <div className={classes.row}>
        <text className={classes.bottomText}>
          Dukaan 2020, All rights reserved.
        </text>
        <div className={classes.row}>
          <text className={classes.bottomText}>Made in</text>
          <img className={classes.flag} src={flag} alt="flag" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
