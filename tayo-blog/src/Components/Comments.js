import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Comments = ({ blog }) => {
  const [content, setContent] = useState('');
  const [comments, setComments] = useState([]);

  const handleClick = async (e) => {
    e.preventDefault();
    console.log('hello');
    try {
      await axios.post('https://blogpostapi1.herokuapp.com/comment', {
        content,
        post: blog.id,
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await axios.get(
          `https://blogpostapi1.herokuapp.com/comment/all_comments/${blog.id}`
        );
        setComments(data.data);
      } catch (e) {
        console.log(e);
      }
    };

    getComments();
  }, [handleClick]);

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

      <textarea
        cols="30"
        rows="3"
        className="post-body"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
      <button className="post-btn" onClick={handleClick}>
        Post
      </button>
    </div>
  );
};

export default Comments;
