import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Newpost = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // const postContent = async () => {
    // axios.post(
    //   'https://blogpostapi1.herokuapp.com/blog_post__post',
    //   {},
    //   {
    //     params: {
    //       name,
    //       title,
    //       content,
    //     },
    //   }
    // );
  };
  // postContent();

  return (
    <div className="post-container">
      <form onSubmit={handleSubmit}>
        <p>Name:</p>
        <input
          type="text"
          className="post-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Title:</p>
        <input
          type="text"
          className="post-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <p>Content:</p>
        <textarea
          cols="30"
          rows="10"
          className="post-body"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button className="post-btn" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};
