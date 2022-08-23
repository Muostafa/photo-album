import React from "react";
import UserInfo from "./UserInfo";
import PostContent from "./PostContent";
import PostActions from "./PostActions";
import "./PhotoPost.css";

function PhotoPost(props) {
  //get the height of the component(300px is the width of the photo in window)
  const x = Math.floor((props.height / props.width) * 300 + 230);
  //define component end
  const height = {
    gridRowEnd: "span " + x,
  };

  return (
    <div className="photo-post" style={height}>
      <UserInfo
        userName={props.userName}
        userImage={props.userImage}
      ></UserInfo>
      <PostContent
        postImage={props.postImage}
        postText={props.PhotoPost}
        id={props.id}
      ></PostContent>
      <PostActions notes={props.notes}></PostActions>
    </div>
  );
}

export default PhotoPost;
