import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="Card">
      <div className="imgPart">
        <img src="https://media.geeksforgeeks.org/auth-dashboard-uploads/read.png" alt="" />
      </div>
      <div className="descriptionPart">
        <div className="h1">
          <h1>Explore Practice Problems</h1>
        </div>
        <div className="p">
          <p>
            The list contains problems across <br />easy medium, hard difficulty.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
