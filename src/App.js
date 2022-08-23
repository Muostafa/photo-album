import "./App.css";
import PhotoWall from "./components/PhotoWall";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Photo from "./components/Photo";

function App() {
  return (
    <Router>
      <div>
      <Routes>
        <Route path="/" element={<PhotoWall/>}/>
        <Route path="/photos/:ID" element={<Photo/>}></Route>  
      </Routes></div>
    </Router>
  );
}

export default App;
