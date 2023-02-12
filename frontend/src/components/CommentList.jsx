const CommentList = (props) => {
  return (
    <div>
      <p>{props.author}</p>
      <pre><p>{props.content}</p></pre>
      <p>{props.submitted}</p>
    </div>
  );
};

export default CommentList;
