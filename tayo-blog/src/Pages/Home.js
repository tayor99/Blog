import React, { useEffect, useState } from 'react';
import Comments from '../Components/Comments';
import axios from 'axios';

export const Home = () => {
  const [blogs, setBlogs] = useState([]);

  const [selectPost, setSelectPost] = useState('');

  const handleClick = (id) => {
    // setIsCommentOpen(!isCommentOpen);
    setSelectPost(id);
  };

  console.log(selectPost);

  useEffect(() => {
    const blogPost = async () => {
      try {
        const { data } = await axios.get('https://blogpostapi1.herokuapp.com/');
        setBlogs(data.data);
      } catch (e) {
        console.log(e);
      }
    };

    blogPost();
  }, []);

  // const deleteBtn = (id) => {
  //   axios.delete(`https://blogpostapi1.herokuapp.com/${id}`);
  // };

  const allPost = blogs.map((blog) => {
    return (
      <div className="blog-container" key={blog.id}>
        <div className="blog-header">
          <h2>{blog.title}</h2>
          <p>Written by {blog.name}</p>
        </div>
        <div className="blog-body">
          <p>{blog.content}</p>
        </div>
        {/* <button onClick={() => deleteBtn(blog.id)}>X</button> */}
        <button className="comment-btn" onClick={() => handleClick(blog.id)}>
          view comments
        </button>
        <div
          className={`comment ${
            selectPost === blog.id ? 'active' : 'not-active'
          } `}
        >
          <Comments blog={blog} />
        </div>
      </div>
    );
  });

  return <div className="blog-parent">{allPost}</div>;
};
