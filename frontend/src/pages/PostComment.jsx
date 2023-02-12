import { useParams } from "react-router-dom";
import CommentForm from "../components/CommentForm";

const PostComment = () => {
    const { id } = useParams();
    return (
        <CommentForm trackId={id}/>
    )
}

export default PostComment;

export async function action({ request, params }) {
    const data = await request.formData();
  
    const commentData = {
      author: data.get('author'),
      content: data.get('content'),
      trackId: data.get('trackId'),
    };
  
    const response = await fetch("http://localhost:5000/postComment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    });
    if (!response.ok) {
      console.log("Error saving post");
    }
    
  }