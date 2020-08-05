import React, { useState } from "react";
import "./Post.css";
import { ReactComponent as HeartIcon } from "../../images/icons/heart.svg";

function Post(props) {
  let [likeNumber, setLike] = useState(props.qtdLikes);

  function click() {
    const click = likeNumber + 1;
    setLike(click);
  }

  let was_Clicked = (e) => {
    click();
    props.getId(props.id);
    props.wasClicked(likeNumber);
    e.target.setAttribute("fill", "#985A4D");
  };

  return (
    <>
      <div className="bodyPost">
        <div className="post">
          <div className="firstContent">
            <div className="userPost">
              <img
                src={require("../../images/" +
                  props.name.toLowerCase() +
                  ".png")}
                alt=""
              />
              <span className="postOwner">{props.name}</span>
            </div>

            <button className="buttonLike">
              <HeartIcon id="heartIcon" onClick={was_Clicked} />
              <span className="likes">{likeNumber}</span>
            </button>
          </div>
          <div className="line"></div>
          <div className="secondContent">
            <span className="postText">
              <p>{props.message}</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
