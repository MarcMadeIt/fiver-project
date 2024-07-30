import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured.jsx";
import TrustBy from "../../components/trustby/Trustby.jsx";
import Slide from "../../components/slide/Slide.jsx";
import { cards, projects } from "../../data.js";
import CatCard from "../../components/catCard/CatCard.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faCheckToSlot } from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "../../components/projectCard/ProjectCard";

function Home() {
  return (
    <div className="home">
      <Featured />
      <TrustBy />
      <Slide slidesToShow={5} arrowsScroll={3}>
        {cards.map((card) => (
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>

      <div className="features">
        <div className="container">
          <div className="item">
            <h1>The best part? Everything.</h1>

            <div className="title">
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{ color: "lightgrey", fontSize: "22px" }}
              />
              <span>Stick to your budget</span>
            </div>
            <p>
              Find the right service for every price point. No hourly rates,
              just project-based pricing.
            </p>

            <div className="title">
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{ color: "lightgrey", fontSize: "22px" }}
              />
              <span>Get quality work done quickly</span>
            </div>
            <p>
              Hand your project over to a talented freelancer in minutes, get
              long-lasting results.
            </p>

            <div className="title">
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{ color: "lightgrey", fontSize: "22px" }}
              />
              <span>Pay when you're happy</span>
            </div>
            <p>
              Upfront quotes mean no surprises. Payments only get released when
              you approve.
            </p>

            <div className="title">
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{ color: "lightgrey", fontSize: "22px" }}
              />
              <span>Count on 24/7 support</span>
            </div>
            <p>
              Our round-the-clock support team is available to help anytime,
              anywhere.
            </p>
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls></video>
          </div>
        </div>
      </div>

      <div className="features solutions">
        <div className="container">
          <div className="item">
            <h1>
              Fiverr<span>.</span> <span>Business Solutions</span>
            </h1>
            <h1>Advanced solutions and professional talent for businesses</h1>

            <div className="points">
              <FontAwesomeIcon
                icon={faCheckToSlot}
                style={{ color: "#AAA5DC", fontSize: "25px" }}
              />
              <div className="desc-points">
                <span>Fiverr Pro</span>
                <p>
                  Access top freelancers and professional business tools for any
                  project
                </p>
              </div>
            </div>
            <div className="points">
              <FontAwesomeIcon
                icon={faCheckToSlot}
                style={{ color: "#AAA5DC", fontSize: "25px" }}
              />
              <div className="desc-points">
                <span>Fiverr Certified</span>
                <p>Build your own branded marketplace of certified experts</p>
              </div>
            </div>
            <div className="points">
              <FontAwesomeIcon
                icon={faCheckToSlot}
                style={{ color: "#AAA5DC", fontSize: "25px" }}
              />
              <div className="desc-points">
                <span>Fiverr Enterprise</span>
                <p>
                  Manage your freelance workforce and onboard additional talent
                  with an end-to-end SaaS solution
                </p>
              </div>
            </div>
            <button>Learn more</button>
          </div>

          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_585,dpr_1.0/v1/attachments/generic_asset/asset/51c35c7cecf75e6a5a0110d27909a2f5-1690202609364/EN.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={3}>
        {projects.map((card) => (
          <ProjectCard key={card.id} item={card} />
        ))}
      </Slide>
    </div>
  );
}

export default Home;
