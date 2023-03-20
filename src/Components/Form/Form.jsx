import { useCallback } from "react";
import styles from "./Form.module.scss";

const Form = ({
  onSubmit,
  onChange,
  userInput,
  editing,
  setEditing,
  onEdit,
  Id,
}) => {
  const handleOnEditBtn = useCallback(
    (todoid) => {
      onEdit();
      setEditing(false);
    },
    [onEdit, setEditing]
  );

  // const handleEditBtnChange = useCallback(
  //   (todoid) => {
  //     const itemsClone = structuredClone(items);

  //     itemsClone.forEach((item) => {
  //       if (item.id === todoid) {
  //         item.userInput = userInput;
  //       }
  //     });
  //     setItems(itemsClone);
  //     setUserInput("");
  //   },
  //   [items, userInput]
  // );
  return (
    <div className={styles.form}>
      <input type="text" id="input" onChange={onChange} value={userInput} />

      {!editing ? (
        <button type="submit" onClick={onSubmit}>
          Submit
        </button>
      ) : (
        <button onClick={handleOnEditBtn}>Edit</button>
      )}
    </div>
  );
};

export default Form;
