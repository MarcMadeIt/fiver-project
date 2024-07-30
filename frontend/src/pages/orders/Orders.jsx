import React from "react";
import "./Orders.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareEnvelope,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

function Orders() {
  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true,
  };

  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ? "Buyer" : "Seller"} </th>
            <th>Contact</th>
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
            <td>11</td>
            <td>{currentUser.username}</td>
            <td className="mail">
              <a href="">
                <FontAwesomeIcon
                  icon={faSquareEnvelope}
                  color="deepskyblue"
                  fontSize="30px"
                />
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
            <td>Gig2</td>
            <td>11</td>
            <td>{currentUser.username}</td>
            <td className="mail">
              <a href="">
                <FontAwesomeIcon
                  icon={faSquareEnvelope}
                  color="deepskyblue"
                  fontSize="30px"
                />
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
            <td>Gig3</td>
            <td>11</td>
            <td>{currentUser.username}</td>
            <td className="mail">
              <a href="">
                <FontAwesomeIcon
                  icon={faSquareEnvelope}
                  color="deepskyblue"
                  fontSize="30px"
                />
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
            <td>Gig4</td>
            <td>11</td>
            <td>{currentUser.username}</td>
            <td className="mail">
              <a href="">
                <FontAwesomeIcon
                  icon={faSquareEnvelope}
                  color="deepskyblue"
                  fontSize="30px"
                />
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
            <td>Gig5</td>
            <td>11</td>
            <td>{currentUser.username}</td>
            <td className="mail">
              <a href="">
                <FontAwesomeIcon
                  icon={faSquareEnvelope}
                  color="deepskyblue"
                  fontSize="30px"
                />
              </a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Orders;
