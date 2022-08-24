import "./App.css";
import React, { useState } from "react";
import PhotoWall from "./components/PhotoWall";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Photo from "./components/Photo";

function App() {
  //contain all fetched posts from picsum api
  const [posts, setPosts] = useState([]);
  return (
    <Router>
      <div>
      <Routes>
        <Route path="/" element={<PhotoWall posts={posts} setPosts={setPosts}/>}/>
        <Route path="/photos/:ID" element={<Photo/>}></Route>  
      </Routes></div>
    </Router>
  );
}

export default App;
