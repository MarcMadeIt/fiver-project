import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faPinterest,
  faTiktok,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDollar,
  faGlobe,
  faUniversalAccess,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>

          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
            <span>Community Standards</span>
          </div>
          <div className="item">
            <h2>More From Fiverr</h2>
            <span>Liverr Business</span>
            <span>Liverr Pro</span>
            <span>Liverr Logo Maker</span>
            <span>Liverr Guides</span>
            <span>Get Inspired</span>
            <span>Liverr Select</span>
            <span>ClearVoice</span>
            <span>Liverr Workspace</span>
            <span>Learn</span>
            <span>Working Not Working</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
            <span>Contact Sales</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on Liverr</span>
            <span>Buying on Liverr</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <Link to="/" className="link">
              {" "}
              <h3>
                Fiverr<span>.</span>
              </h3>
            </Link>
            <span>© Fiverr International Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="socials">
              <FontAwesomeIcon icon={faTiktok} style={{ fontSize: "25px" }} />
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ fontSize: "25px" }}
              />
              <FontAwesomeIcon
                icon={faLinkedinIn}
                style={{ fontSize: "25px" }}
              />
              <FontAwesomeIcon icon={faFacebook} style={{ fontSize: "25px" }} />
              <FontAwesomeIcon
                icon={faPinterest}
                style={{ fontSize: "25px" }}
              />
              <FontAwesomeIcon icon={faXTwitter} style={{ fontSize: "25px" }} />
            </div>
            <div className="link">
              <FontAwesomeIcon icon={faGlobe} />
              <span>English</span>
            </div>
            <div className="link">
              <FontAwesomeIcon icon={faDollar} />
              <span>USD</span>
            </div>
            <div className="link">
              <FontAwesomeIcon
                icon={faUniversalAccess}
                style={{ fontSize: "25px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
