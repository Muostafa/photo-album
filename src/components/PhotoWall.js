import React, { useState, useEffect } from "react";
import PhotoPost from "./PhotoPost";
import "./PhotoWall.css";
import LoadingButton from "@mui/lab/LoadingButton";

function PhotoWall({ posts, setPosts }) {
  //makes sure we requests different batches from picsum to avoid repetition of the photos
  const [postsBatchNum, setPostsBatchNum] = useState(1);
  //all the current posts with the required info
  const [postsList, setPostsList] = useState([]);
  //determines if the loading should appear on the button
  const [isLoading, setIsLoading] = useState(false);

  //fetch 10 photos from the picsum api and add them to posts
  const getFetchPhotos = () => {
    setIsLoading(true);
    fetch(`https://picsum.photos/v2/list?page=${postsBatchNum}&limit=15`)
      .then((res) => res.json())
      .then((result) => {
        setPosts((oldPosts) => oldPosts.concat(result));
        setPostsBatchNum(postsBatchNum + 1);
      })
      .then(() => {
        setIsLoading(false);
        console.log(posts);
      })
      .catch(console.log);
  };

  //update postsLists that should appear on window
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
      <LoadingButton
        size="small"
        onClick={getFetchPhotos}
        loading={isLoading}
        loadingIndicator="Loading…"
        variant="contained"
      >
        Load more posts
      </LoadingButton>
    </div>
  );
}

export default PhotoWall;
