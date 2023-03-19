import styles from "./Form.module.scss";

const Form = ({ onSubmit, onChange, userInput, editing, onEditBtn }) => {
  return (
    <div className={styles.form}>
      <input type="text" id="input" onChange={onChange} value={userInput} />

      {!editing ? (
        <button type="submit" onClick={onSubmit}>
          Submit
        </button>
      ) : (
        <button onClick={onEditBtn}>Edit</button>
      )}
    </div>
  );
};

export default Form;
