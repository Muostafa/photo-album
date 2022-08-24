import React from "react";
import "./PostContent.css";
import { Link } from "react-router-dom";

function PostContent(props) {
  const textStyle = {
    maxWidth: "100%",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
    overflow: "hidden",
    textOverflow: "ellipsis",
  };
  return (
    <div className="post-content">
      <Link to={`/photos/${props.id}`}>
        <img className="post-image" src={props.postImage} alt="random" />
      </Link>
      <p style={textStyle}>{props.postText}</p>
    </div>
  );
}

PostContent.defaultProps = {
  postImage: "https://picsum.photos/200/300?random=" + 2,
  postText: "This is a default description on the image",
};

export default React.memo(PostContent);
