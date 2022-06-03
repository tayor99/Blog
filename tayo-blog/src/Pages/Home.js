import React, { useEffect, useState } from 'react';
import data from '../data';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Home = ({ setCurrentPost }) => {
  const [blogs, setBlogs] = useState(data);

  // useEffect(() => {
  //   const blogPost = async () => {
  //     const { data } = await axios.get('https://blogpostapi1.herokuapp.com/');
  //     setBlogs(data.data);
  //   };
  //   blogPost();
  // }, []);

  const handleClick = (id) => {
    setCurrentPost(id);
  };

  const allPost = blogs.map((blog) => {
    const posts = blog.post.split(' ');
    const splitedPost = posts.substr(0, 50);
    return (
      <div className="blog-container" key={blog.id}>
        <div className="blog-header">
          <h2>{blog.title}</h2>
          <p>Written by {blog.name}</p>
        </div>
        <div className="blog-body">
          <p>
            {splitedPost.join(' ')}.....
            <Link
              to="/comments"
              className="read-more"
              onClick={() => handleClick(blog.id)}
            >
              Read more
            </Link>
          </p>
        </div>
      </div>
    );
  });

  return <div className="blog-parent">{allPost}</div>;
};
