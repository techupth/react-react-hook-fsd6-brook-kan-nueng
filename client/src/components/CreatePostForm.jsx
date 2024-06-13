import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useBlogPosts from "../hooks/useBlogPosts";

function CreatePostForm() {
  const navigate = useNavigate();

  const { handleNewTitle, handleNewContent, handleCreate } = useBlogPosts();

  return (
    <form className="post-form">
      <h1>Create Post Form</h1>
      <div className="input-container">
        <label>
          Title
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Enter title here"
            onChange={handleNewTitle}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Content
          <textarea
            id="content"
            name="content"
            type="text"
            placeholder="Enter content here"
            onChange={handleNewContent}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit" onClick={handleCreate}>
          Create
        </button>
      </div>
    </form>
  );
}

export default CreatePostForm;
