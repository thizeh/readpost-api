import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Post from "./pages/Post/post";
import Feed from "./pages/Feed/feed";
import Filter from "./pages/Filter/busca";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route path="/post" element={<Post />} />
        <Route path="/filter" element={<Filter />} />
      </Routes>
    </Router>
  );
}

export default App;
