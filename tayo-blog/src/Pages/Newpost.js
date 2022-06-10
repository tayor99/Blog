import React, { useState } from 'react';
import axios from 'axios';
import { APIURL } from '../url';
export const Newpost = () => {
  const [details, setDetails] = useState({
    name: '',
    title: '',
    content: '',
  });

  const set = (name) => {
    return ({ target: { value } }) => {
      setDetails((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(APIURL + '/', {
        name: details.name,
        title: details.title,
        content: details.content,
      });
    } catch (e) {
      console.log(e);
    }
    setDetails({
      name: '',
      title: '',
      content: '',
    });
  };
  return (
    <div className="post-container">
      <form onSubmit={handleSubmit}>
        <p>Name:</p>
        <input
          type="text"
          className="post-name"
          value={details.name}
          onChange={set('name')}
          required
        />
        <p>Title:</p>
        <input
          type="text"
          className="post-title"
          value={details.title}
          onChange={set('title')}
          required
        />
        <p>Content:</p>
        <textarea
          cols="30"
          rows="10"
          className="post-body"
          value={details.content}
          onChange={set('content')}
          required
        ></textarea>

        <button className="post-btn" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};
