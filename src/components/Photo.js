import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Photo.css"

function Photo() {
  //extract photo id from the url
  const params = useParams();
  const photoID = params.ID;

  //get all photoInfo
  const [photoInfo, setPhotoInfo] = useState("");
    fetch(`https://picsum.photos/id/${photoID}/info`)
      .then((res) => res.json())
      .then((result) => {
       setPhotoInfo(result);
      })
      .catch(console.log);

  return (
      <div className="photo-container">
        <img src={photoInfo.download_url} alt="Random" />
        <h1>By: {photoInfo.author}</h1>
      </div>
  );
}

export default Photo;
