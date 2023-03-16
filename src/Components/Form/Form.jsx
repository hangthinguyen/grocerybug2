import { useCallback, useState } from "react";
import styles from "./Form.module.scss";

const Form = ({ onSubmit }) => {
  const [userInput, setUserInput] = useState("");

  const handleInputOnChange = useCallback((e) => {
    setUserInput(e.target.value);
    console.log(e.target.value);
  }, []);

  return (
    <div className={styles.form}>
      <input
        type="text"
        id="input"
        onChange={handleInputOnChange}
        value={userInput}
      />

      <button type="submit" onClick={() => onSubmit(userInput)}>
        Submit
      </button>
    </div>
  );
};

export default Form;
