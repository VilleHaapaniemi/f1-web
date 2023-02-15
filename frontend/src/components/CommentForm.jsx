import { useRef } from "react";
import classes from "./CommentForm.module.css";

const CommentForm = (props) => {
  const id = props.trackId;
  const authorInputRef = useRef();
  const contentInputRef = useRef();

  const refreshPage = () => {
    setTimeout(() => {
      window.location.reload();
    }, 200);
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    const author = authorInputRef.current.value;
    const content = contentInputRef.current.value;

    const commentData = {
      author: author,
      content: content,
      trackId: id,
    };
    await fetch("http://localhost:5000/postComment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    });
    refreshPage();
  };

  return (
    <div className={classes.formContainer}>
      <h2>Post Comment</h2>
      <form onSubmit={formSubmitHandler}>
        <p>
          <label>Author</label>
          <input
            id="author"
            type="text"
            name="author"
            ref={authorInputRef}
            required
          />
        </p>
        <p>
          <label>Comment</label>
          <textarea
            id="content"
            name="content"
            rows="10"
            ref={contentInputRef}
            required
          />
        </p>
        <button>Comment</button>
      </form>
    </div>
  );
};

export default CommentForm;
