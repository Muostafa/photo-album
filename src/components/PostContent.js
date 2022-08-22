import React from "react";
import "./PostContent.css"
import UserInfo from "./UserInfo";
import PostActions from "./PostActions";

function PostContent(props) {
  return (
    <>
      <div className="post-content">
        <img className="post-image" src={props.postImage} />
        <p>{props.postText}</p>
      </div>
    </>
  );
}

PostContent.defaultProps = {
  postImage: "https://picsum.photos/200/300?random=" + 2,
  postText: "This is a default description on the image",
};

export default PostContent;
