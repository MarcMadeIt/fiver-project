import React from "react";
import "./Gig.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsRotate,
  faCheck,
  faCircleInfo,
  faClockRotateLeft,
  faStar,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

function Gig() {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadCrumbs">Home / Graphics & Design / </span>
          <h1>I will create quick custom ai art</h1>
          <div className="user">
            <img
              className="pp"
              src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/4a118982f47cd50ef30e25b7e2e11a88-1665813403264/418a5c38-0c7f-4f35-ad3c-2254efc0f858.png"
              alt=""
            />
            <span>Phillip Doe</span>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <span>5</span>
            </div>
          </div>
          <Slider slideToShow={1} arrowsScroll={1} className="slider">
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/298676084/original/4c637509cced37cc3df7b1efa213e0bea2a277ab/create-custom-ai-art-using-midjourney-advanced-ai-tool.png"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/298676084/original/44b4501783b655490412494e43b4167e6fcb6042/create-custom-ai-art-using-midjourney-advanced-ai-tool.png"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/c18a5d4edb11b7186cc9a135cd919cd9-1697004762/27/create-custom-ai-art-using-midjourney-advanced-ai-tool.png"
              alt=""
            />
          </Slider>
          <h2>About this gig</h2>
          <p className="pitch1">
            I will create 1, 3, or 7 fully customized images &#40;based on your
            descriptions&#41; using a powerful AI tool called Midjourney. No
            nudity, violence, or drug related themes. Please contact me before
            placing an order*
          </p>
          <p className="pitch2">
            You can send me a photo, a detailed description, or simply just send
            me a message and we can discuss your idea. It is all up to your
            imagination + my skills and with that - the possibilities are
            endless. I am flexible and committed to creating an optimal result
            for your project
          </p>
          <hr />
          <div className="tags">
            <div className="exp">
              <span>Expertise</span>
              <p>
                Character design, <br /> Illustration, Portraits
              </p>
            </div>
            <div className="ai">
              <span>AI engine</span>
              <p>Midjourney</p>
            </div>
          </div>

          <div className="about">
            <h2>About the Seller</h2>
            <div className="user">
              <div className="img">
                <img
                  src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/4a118982f47cd50ef30e25b7e2e11a88-1665813403264/418a5c38-0c7f-4f35-ad3c-2254efc0f858.png"
                  alt=""
                />
              </div>
              <div className="seller">
                <p>Phillip Doe</p>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <p className="desc">USA</p>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <p className="desc">Aug 2022</p>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <p className="desc">4 hours</p>
                </div>
                <div className="item">
                  <span className="title">Last Delivery</span>
                  <p className="desc">1 day</p>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <p className="desc"> English</p>
                </div>
              </div>
              <hr />
              <p className="note">
                Hi there & welcome to my shop. I'm ai_lani - a digital artist
                who creates fully customizable images based on your specific
                needs and vision. You send me the photo or description, and I
                will present to you a one of a kind - AI generated piece of art.
                If you have any questions, send me a message anytime
              </p>
            </div>
            <div className="reviews">
              <h2>Reviews</h2>
              <div className="item">
                <div className="user">
                  <img
                    className="pp"
                    src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/86e757994cf49dfb7a8504eeeaa0934c-1669920390540/d326a060-9b50-422d-a91b-1c3a319e6893.jpg"
                    alt=""
                  />
                  <div className="user-info">
                    <span>John Doe</span>
                    <div className="country">
                      <img
                        src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                        alt=""
                      />
                      <span>United States</span>
                    </div>
                  </div>
                </div>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <span>5</span>
                </div>
                <p>
                  Phillip Doe is very good at what he does. Very talented and
                  very thorough in his work. I had a bit of difficulty in
                  conveying my message across; maybe because I was new to Fiverr
                  but was supported throughout the revision with warmth from his
                  side. Really recommend to others.
                </p>
                <div className="helpful">
                  <span>Helpful?</span>
                  <FontAwesomeIcon icon={faThumbsDown} />
                  <span>Yes</span>
                  <FontAwesomeIcon icon={faThumbsUp} />
                  <span>No</span>
                </div>
              </div>

              <hr />

              <div className="item">
                <div className="user">
                  <img
                    className="pp"
                    src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/86e757994cf49dfb7a8504eeeaa0934c-1669920390540/d326a060-9b50-422d-a91b-1c3a319e6893.jpg"
                    alt=""
                  />
                  <div className="user-info">
                    <span>John Doe</span>
                    <div className="country">
                      <img
                        src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                        alt=""
                      />
                      <span>United States</span>
                    </div>
                  </div>
                </div>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <span>5</span>
                </div>
                <p>
                  Phillip Doe is very good at what he does. Very talented and
                  very thorough in his work. I had a bit of difficulty in
                  conveying my message across; maybe because I was new to Fiverr
                  but was supported throughout the revision with warmth from his
                  side. Really recommend to others.
                </p>
                <div className="helpful">
                  <span>Helpful?</span>
                  <FontAwesomeIcon icon={faThumbsDown} />
                  <span>Yes</span>
                  <FontAwesomeIcon icon={faThumbsUp} />
                  <span>No</span>
                </div>
              </div>
              <hr />
              <div className="item">
                <div className="user">
                  <img
                    className="pp"
                    src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/86e757994cf49dfb7a8504eeeaa0934c-1669920390540/d326a060-9b50-422d-a91b-1c3a319e6893.jpg"
                    alt=""
                  />
                  <div className="user-info">
                    <span>John Doe</span>
                    <div className="country">
                      <img
                        src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                        alt=""
                      />
                      <span>United States</span>
                    </div>
                  </div>
                </div>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <span>5</span>
                </div>
                <p>
                  Phillip Doe is very good at what he does. Very talented and
                  very thorough in his work. I had a bit of difficulty in
                  conveying my message across; maybe because I was new to Fiverr
                  but was supported throughout the revision with warmth from his
                  side. Really recommend to others.
                </p>
                <div className="helpful">
                  <span>Helpful?</span>
                  <FontAwesomeIcon icon={faThumbsDown} />
                  <span>Yes</span>
                  <FontAwesomeIcon icon={faThumbsUp} />
                  <span>No</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>1 AI generated image</h3>
            <h2>
              $ 39.99 <FontAwesomeIcon icon={faCircleInfo} fontSize="20px" />
            </h2>
          </div>
          <p>
            Contact me via Chat. I will offer a price based on complexity of the
            image.
          </p>
          <div className="details">
            <div className="item">
              <FontAwesomeIcon icon={faClockRotateLeft} fontSize="18px" />
              <span>2 Days Delivery</span>
            </div>
            <div className="item">
              <FontAwesomeIcon icon={faArrowsRotate} fontSize="18px" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="checks">
            <div className="check">
              <FontAwesomeIcon icon={faCheck} color="green" fontSize="20px" />
              <span>Prompt writing</span>
            </div>
            <div className="check">
              <FontAwesomeIcon icon={faCheck} color="green" fontSize="20px" />
              <span>Artwork delivery</span>
            </div>
            <div className="check">
              <FontAwesomeIcon icon={faCheck} color="green" fontSize="20px" />
              <span>Image upscaling </span>
            </div>
            <div className="check">
              <FontAwesomeIcon icon={faCheck} color="green" fontSize="20px" />
              <span>Additional design</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Gig;
