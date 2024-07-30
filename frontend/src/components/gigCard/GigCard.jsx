import React from "react";
import "./GigCard.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

function GigCard({ item }) {
  return (
    <Link to="/gig/123" className="link">
      <div className="gigcard">
        <img src={item.img} alt="" />
        <div className="info">
          <div className="user">
            <img src={item.pp} alt="" />
            <span>{item.username}</span>
          </div>
          <p>{item.desc}</p>
          <div className="star">
            <FontAwesomeIcon icon={faStar} />
            <span>{item.star}</span>
          </div>
        </div>
        <div className="price">
          <span>From</span>
          <h2>${item.price}</h2>
        </div>
      </div>
    </Link>
  );
}

export default GigCard;
