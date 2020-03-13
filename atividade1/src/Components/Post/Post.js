import React from "react";
import "./Post.css";
import Avatar from "../../images/girl.png";
import Like from "../../images/like.svg";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.content = props.content;
  }
  render() {
    return (
      <div className="post">
        <div className="postUser">
          <img src={Avatar} alt="" />
          <span className="username">{this.props.name} says:</span>
        </div>
        <div className="contentPost">{this.props.content}</div>
        <div className="line"></div>
        <div className="likeContent">
          <img src={Like} alt="" className="likeicon" />
          <span className="likes">3</span>
        </div>
      </div>
    );
  }
}

export default Post;
