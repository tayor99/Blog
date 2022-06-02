import React, { useState } from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

export const Home = ({ setCurrentPost }) => {
  const [blogs, setBlogs] = useState(data);

  const handleClick = (id) => {
    setCurrentPost(id);
  };

  const allPost = blogs.map((blog) => {
    const posts = blog.post.split(' ');
    const splitedPost = posts.slice(0, 50);
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
