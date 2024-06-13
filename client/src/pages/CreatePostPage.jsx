import CreatePostForm from "../components/CreatePostForm";
import { useNavigate } from "react-router-dom";

function CreatePostPage() {
  const nav = useNavigate()
  return (
    <div>
      <h1>Create Post Page</h1>
      <CreatePostForm />
      <button onClick={()=>nav('/')}>Back to Home</button>
    </div>
  );
}

export default CreatePostPage;
