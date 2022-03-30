import React from "react";
import classes from "./style.module.css";
import cross from "../../assets/cross.png";
import Pagination from "./Pagination";
import DataCard from "./DataCard";
import Data from "../../DemoData";
import CopyCard from "./CopyCard";

const Card = () => {
  return (
    <div className={classes.main_container}>
      <div className={classes.sub_container}>
        <text className={classes.heading}>Free slogan maker</text>
        <text className={classes.text}>
          Simply enter a term that describes your business, and get up to 1,000
          relevant slogans for free.
        </text>
        <text className={classes.text2}>Word for your slogan</text>
        <div className={classes.searchBox}>
          <text className={classes.searchText}>cozy</text>
          <img className={classes.cross} src={cross} alt="cross" />
        </div>
        <button className={classes.generateButton}>Generate Slogans</button>
        <div className={classes.line} />
        <div className={classes.row}>
          <text className={classes.generatedText}>
            We have generated 1,023 slogans for “cozy”
          </text>
          <button className={classes.downloadButton}>Download all</button>
        </div>
        <div className={classes.cards_container}>
          <CopyCard />
          {Data.map((e) => (
            <DataCard data={e} />
          ))}
        </div>
        <div className={classes.line2} />
        <Pagination />
      </div>
    </div>
  );
};

export default Card;
