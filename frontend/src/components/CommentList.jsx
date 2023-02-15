import classes from "./CommentList.module.css";

const CommentList = (props) => {

  return (
    <div className={classes.commentList}>
      <p><b>{props.author}</b> <i>{props.submitted}</i></p>
      <pre>{props.content}</pre>
    </div>
  );
};

export default CommentList;
