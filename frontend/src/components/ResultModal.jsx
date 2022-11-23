import classes from "./ResultModal.module.css";

const ResultModal = (props) => {

  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <h1>Results</h1>
        <button onClick={props.onConfirm}>OK</button>
      </div>
    </div>
  );
};

export default ResultModal;
