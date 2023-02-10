import { Form } from "react-router-dom";

const CommentForm = () => {
  return (
    <Form method="post">
      <label>Name</label>
      <input id="name" type="text" name="name" />
      <button type="submit">Save</button>
    </Form>
  );
};

export default CommentForm;
