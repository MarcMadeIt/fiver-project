import React from "react";
import "./Message.scss";
import { Link } from "react-router-dom";

function Message() {
  return (
    <div className="message">
      <div className="container">
        <span className="breadCrumbs">
          <Link to="/messages" className="link">
            MESSAGES
          </Link>
          / JOHN DOE
        </span>
        <div className="messages">
          <div className="item">
            <img src="../../../public/img/user.jpeg" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              nobis praesentium, consequuntur voluptates facere eius
              perspiciatis, optio cupiditate porro consequatur dolorum
              blanditiis sed itaque? Dolor enim eveniet eum tenetur facere?
            </p>
          </div>
          <div className="item owner">
            <img src="../../../public/img/user.jpeg" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              nobis praesentium, consequuntur voluptates facere eius
              perspiciatis, optio cupiditate porro consequatur dolorum
              blanditiis sed itaque? Dolor enim eveniet eum tenetur facere?
            </p>
          </div>

          <div className="item">
            <img src="../../../public/img/user.jpeg" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              nobis praesentium, consequuntur voluptates facere eius
              perspiciatis, optio cupiditate porro consequatur dolorum
              blanditiis sed itaque? Dolor enim eveniet eum tenetur facere?
            </p>
          </div>
          <div className="item owner">
            <img src="../../../public/img/user.jpeg" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              nobis praesentium, consequuntur voluptates facere eius
              perspiciatis, optio cupiditate porro consequatur dolorum
              blanditiis sed itaque? Dolor enim eveniet eum tenetur facere?
            </p>
          </div>

          <div className="item">
            <img src="../../../public/img/user.jpeg" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              nobis praesentium, consequuntur voluptates facere eius
              perspiciatis, optio cupiditate porro consequatur dolorum
              blanditiis sed itaque? Dolor enim eveniet eum tenetur facere?
            </p>
          </div>
          <div className="item owner">
            <img src="../../../public/img/user.jpeg" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              nobis praesentium, consequuntur voluptates facere eius
              perspiciatis, optio cupiditate porro consequatur dolorum
              blanditiis sed itaque? Dolor enim eveniet eum tenetur facere?
            </p>
          </div>

          <div className="item">
            <img src="../../../public/img/user.jpeg" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              nobis praesentium, consequuntur voluptates facere eius
              perspiciatis, optio cupiditate porro consequatur dolorum
              blanditiis sed itaque? Dolor enim eveniet eum tenetur facere?
            </p>
          </div>
          <div className="item owner">
            <img src="../../../public/img/user.jpeg" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              nobis praesentium, consequuntur voluptates facere eius
              perspiciatis, optio cupiditate porro consequatur dolorum
              blanditiis sed itaque? Dolor enim eveniet eum tenetur facere?
            </p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea
            name=""
            placeholder="Write a message..."
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Message;
