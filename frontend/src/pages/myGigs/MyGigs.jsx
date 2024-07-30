import React from "react";
import "./MyGigs.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function MyGigs() {
  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>My Gigs</h1>

          <Link to="/add">
            <button>Add New Gig</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>

          <tr>
            <td>
              <img
                className="pp"
                src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/f80a6fea3e8d86ba1844c31c98c85a2d-1696973370/MORNING%20STAR_PNG-v1/correct-fix-images-generated-by-ai.png"
                alt=""
              />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <a href="">
                <FontAwesomeIcon icon={faTrashCan} color="red" />
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="pp"
                src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/f80a6fea3e8d86ba1844c31c98c85a2d-1696973370/MORNING%20STAR_PNG-v1/correct-fix-images-generated-by-ai.png"
                alt=""
              />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <a href="">
                <FontAwesomeIcon icon={faTrashCan} color="red" />
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="pp"
                src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/f80a6fea3e8d86ba1844c31c98c85a2d-1696973370/MORNING%20STAR_PNG-v1/correct-fix-images-generated-by-ai.png"
                alt=""
              />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <a href="">
                <FontAwesomeIcon icon={faTrashCan} color="red" />
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="pp"
                src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/f80a6fea3e8d86ba1844c31c98c85a2d-1696973370/MORNING%20STAR_PNG-v1/correct-fix-images-generated-by-ai.png"
                alt=""
              />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <a href="">
                <FontAwesomeIcon icon={faTrashCan} color="red" />
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="pp"
                src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/f80a6fea3e8d86ba1844c31c98c85a2d-1696973370/MORNING%20STAR_PNG-v1/correct-fix-images-generated-by-ai.png"
                alt=""
              />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <a href="">
                <FontAwesomeIcon icon={faTrashCan} color="red" />
              </a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default MyGigs;
