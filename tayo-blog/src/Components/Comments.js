import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GET_COMMENTS, POST_COMMENT } from '../url';

const Comments = ({ blog }) => {
  const [content, setContent] = useState('');
  const [comments, setComments] = useState([]);

  // const []

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post(POST_COMMENT, {
        content,
        post: blog.id,
      });
    } catch (e) {
      console.log(e);
    }
    setContent('');
  };

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await axios.get(GET_COMMENTS + blog.id);
        setComments(data.data);
      } catch (e) {
        console.log(e);
      }
    };

    getComments();
  }, [comments]);

  return (
    <div className="comment-container">
      <div className="comments">
        <h3 className="comments-header">Comments</h3>
        {comments.map((comment) => {
          return (
            <p className="comment-content" key={comment.id}>
              {comment.content}
            </p>
          );
        })}
      </div>
      <form onSubmit={handleClick}>
        <textarea
          cols="30"
          rows="3"
          className="post-body"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <button className="post-btn">Post</button>
      </form>
    </div>
  );
};

export default Comments;
