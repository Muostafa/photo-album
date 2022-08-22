import React from "react";
import UserInfo from "./UserInfo";
import PostContent from "./PostContent";
import PostActions from "./PostActions";
import "./PhotoPost.css"
function PhotoPost(props) {
  return (
    <div className="photo-post">
      <UserInfo userName={props.userName} userImage={props.userImage}></UserInfo>
      <PostContent
        postImage={props.postImage}
        postText={props.PhotoPost}
      ></PostContent>
      <PostActions notes={props.notes}></PostActions>
    </div>
  );
}

export default PhotoPost;
