import { useCallback } from "react";
import styles from "./Form.module.scss";

const Form = ({ onSubmit, onChange, userInput }) => {
  // const handleInputOnChange = useCallback(
  //   (e) => {
  //     setUserInput(e.target.value);
  //   },
  //   [setUserInput]
  // );

  // const handleInputReset = useCallback(() => {
  //   onSubmit(userInput);
  //   setUserInput("");
  // }, [onSubmit, setUserInput, userInput]);

  return (
    <div className={styles.form}>
      <input type="text" id="input" onChange={onChange} value={userInput} />

      <button type="submit" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Form;
