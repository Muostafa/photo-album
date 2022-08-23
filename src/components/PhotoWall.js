import React, { useState, useEffect } from "react";
import PhotoPost from "./PhotoPost";
import Button from '@mui/material/Button'; 
import "./PhotoWall.css";

function PhotoWall() {
  const [posts, setPosts] = useState([]);
  const [postsBatchNum, setPostsBatchNum] = useState(1);
  const [postsList, setPostsList] = useState([]);

  const getFetchPhotos = () => {
    fetch(`https://picsum.photos/v2/list?page=${postsBatchNum}&limit=10`)
      .then((res) => res.json())
      .then((result) => {
        setPosts((oldPosts) => oldPosts.concat(result));
        setPostsBatchNum(postsBatchNum + 1);
      })
      .then(() => {
        console.log(posts);
      })
      .catch(console.log);
  };
  useEffect(() => {
    setPostsList(
      posts.map((post) => (
        <PhotoPost
          key={post.id}
          id={post.id}
          userName={post.author}
          postImage={post.download_url}
          width={post.width}
          height={post.height}
          notes={Math.floor(Math.random() * 100)}
        />
      ))
    );
  }, [posts]);
  return (
    <div className="main">
      <div className="photo-wall">{postsList}</div>
      <Button variant="contained" onClick={getFetchPhotos}>Load more posts</Button>
    </div>
  );
}

export default PhotoWall;
