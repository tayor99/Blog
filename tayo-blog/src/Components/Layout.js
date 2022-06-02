import React, { useState } from 'react';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
// import About from "../Pages/About";
import { Home } from '../Pages/Home';
import { Newpost } from '../Pages/Newpost';
import Comments from './Comments';

const Layout = () => {
  const [currentPost, setCurrentPost] = useState(0);
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home currentPost={currentPost} setCurrentPost={setCurrentPost} />
          }
        />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/new-post" element={<Newpost />} />
        <Route
          path="/comments"
          element={
            <Comments
              currentPost={currentPost}
              setCurrentPost={setCurrentPost}
            />
          }
        />
      </Routes>
    </>
  );
};

export default Layout;
