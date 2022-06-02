import React from 'react';

export const Newpost = () => {
  return (
    <div className="post-container">
      <form>
        <h3>Name:</h3>
        <input type="text" className="post-name" />
        <h3>Title:</h3>
        <input type="text" className="post-title" />
        <h3>Content:</h3>
        <textarea cols="30" rows="10" className="post-body"></textarea>
        <button className="post-btn">Submit</button>
      </form>
    </div>
  );
};
