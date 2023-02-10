import { Form } from "react-router-dom";

const CommentForm = (props) => {
  return (
    <Form method="post">
      <p>
        <label>Author</label>
        <input id="author" type="text" name="author" required />
      </p>
      <p>
        <label>Comment</label>
        <textarea id="content" name="content" rows="10" required />
      </p>
      <input type="hidden" name="trackId" value={props.trackId} />
      <button type="submit">Comment</button>
    </Form>
  );
};

export default CommentForm;
