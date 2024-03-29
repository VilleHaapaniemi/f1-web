import CommentList from "./CommentList";
import classes from "./Comments.module.css";

const Comments = (props) => {
  const comments = props.comments;

  let commentsContent = <p>Loading...</p>;
  if (comments.length > 0) {
    commentsContent = comments.map((comment) => (
      <CommentList
        author={comment.author}
        content={comment.content}
        submitted={comment.submitted}
        key={comment.id}
      />
    ));
  } else {
    commentsContent = <p>No comments yet</p>;
  }

  return (
    <div className={classes.commentsContainer}>
      <h2>Comments</h2>
      {commentsContent}
    </div>
  );
};

export default Comments;
