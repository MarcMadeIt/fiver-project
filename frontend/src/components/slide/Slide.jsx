import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slide.scss";

function Slide({ children, slidesToShow, arrowsScroll }) {
  const settings = {
    slidesToShow: slidesToShow || 3,
    slidesToScroll: arrowsScroll || 1,
    infinite: true,
    arrows: true,
    prevArrow: <button className="slick-prev">{"<"}</button>,
    nextArrow: <button className="slick-next">{">"}</button>,
  };

  return (
    <div className="slide">
      <div className="container">
        <Slider {...settings}>
          {children}
        </Slider>
      </div>
    </div>
  );
}

export default Slide;
