import { useCallback, useState } from "react";
import Form from "../Form/Form";
import ItemsList from "../ItemsList/ItemsList";
import styles from "./InputItemsBody.module.scss";

const InputItemsBpdy = () => {
  const [items, setItems] = useState([]);

  const [userInput, setUserInput] = useState("");

  const [editing, setEditing] = useState(false);

  const handleUserInput = useCallback((e) => {
    setUserInput(e.target.value);
  }, []);

  const handleOnSubmit = useCallback(
    (todoid) => {
      setItems([
        ...items,
        {
          id: Math.random() * 1000,
          userInput: userInput,
          checked: false,
        },
      ]);
      setUserInput("");
    },
    [items, userInput]
  );

  const handleOnChecked = useCallback(
    (todoId) => {
      const itemsClone = structuredClone(items);

      itemsClone.forEach((item) => {
        if (item.id === todoId) {
          item.checked = !item.checked;
        }
      });
      setItems(itemsClone);
    },
    [items]
  );

  const handleOnItemDelete = useCallback(
    (todoId) => {
      const itemsClone = structuredClone(items);

      itemsClone.forEach((item) => {
        if (item.id === todoId) {
          itemsClone.splice(itemsClone.indexOf(item), 1);
        }
      });
      setItems(itemsClone);
    },
    [items]
  );

  const handleOnClear = useCallback(() => {
    setItems([]);
  }, []);

  const handleOnEditIcon = useCallback(
    (todoid) => {
      console.log();
      const itemsClone = structuredClone(items);

      itemsClone.forEach((item) => {
        if (item.id === todoid) {
          setUserInput(item.userInput);
        }
      });
      setEditing(true);
    },
    [items]
  );

  const handleEditBtnChange = useCallback(() => {
    setEditing(false);
  }, []);

  return (
    <div className={styles.InputItemsBody}>
      <Form
        onChange={handleUserInput}
        userInput={userInput}
        onSubmit={handleOnSubmit}
        setEditing={setEditing}
        editing={editing}
        onEditBtn={handleEditBtnChange}
      />
      <ItemsList
        items={items}
        onCheck={handleOnChecked}
        onDelete={handleOnItemDelete}
        onClear={handleOnClear}
        onEdit={handleOnEditIcon}
      />
    </div>
  );
};

export default InputItemsBpdy;
