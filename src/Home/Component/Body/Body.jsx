import React from "react";
import "./Body.css";
import SearchBar from "../../../Function Components/SearchBar/SearchBar";
import Card from "../../../Function Components/Card/Card";

const Body = () => {
  return (
    <div className="Body">
      <div className="top1">
        <div className="top1-content">
          <div className="heading top1-content-common">Hello, What Do You Want To Learn?</div>
          <div className="search top1-content-common">
            <SearchBar />
          </div>
          <div className="suggestions top1-content-common"></div>
        </div>
      </div>
      <div className="top2">
        <div className="top2-content">
          <Card/>
        </div>
      </div>
    </div>
  );
};

export default Body;
