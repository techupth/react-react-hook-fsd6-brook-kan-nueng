import axios from "axios";
import { useEffect, useState } from "react";

function useBlogPosts() {
  const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const getPosts = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const response = await axios("http://localhost:4000/posts");
      setPosts(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };

  const createPost = async () => {
    await axios.post("http://localhost:4001/products", {
      title,
      content,
    });
    navigate("/");
  };

  const handleNewTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleNewContent = (event) => {
    setContent(event.target.value);
  };
  const handleCreate = (event) => {
    event.preventDefault();
    createPost();
  };

  const removePostButton = async (id) => {
    await axios.delete(`http://localhost:4000/posts/${id}`);
    getPosts();
  };

  useEffect(() => {
    getPosts();
  }, []);

  return {
    posts,
    getPosts,
    isLoading,
    isError,
    removePostButton,
    createPost,
    handleNewTitle,
    handleNewContent,
    handleCreate,
  };
}

export default useBlogPosts;
