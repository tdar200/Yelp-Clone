import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./screens/Home"
import DetailsPage from "./screens/DetailsPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/details/:id" element={<DetailsPage/>} />
     
      </Routes>
   
    </Router>
  );
}

export default App;
