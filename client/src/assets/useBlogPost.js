import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export function useBlogPost(){
    const param = useParams()
    const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const getPosts = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const results = await axios(`http://localhost:4000/posts`);
      setPosts(results.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);
  return { posts, isLoading, isError };
}