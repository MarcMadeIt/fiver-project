import React, { useState } from "react";
import "./Gigs.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import GigCard from "../../components/gigCard/GigCard";
import { gigs } from "../../data.js";

function Gigs() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  return (
    <div className="gigs">
      <div className="container">
        <div className="info">
          <span> Home / Graphics & Design</span>
          <h1> AI Artists</h1>
          <p>
            Explore the boundaries of art and technology with Fiverr's AI
            artists
          </p>
          <div className="big-btn">
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2734.svg"
                alt=""
              />
              <span>Image Generator</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2735.svg"
                alt=""
              />
              <span>Custom Image Prompts</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="menu">
          <div className="left">
            <span>Budged</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort By:</span>
            <span className="sortType">
              {sort == "sales" ? "Best Selling" : "Newest"}
            </span>
            <FontAwesomeIcon
              icon={faChevronDown}
              onClick={() => setOpen(!open)}
            />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gigs;
