import { useCallback, useState } from "react";
import Form from "../Form/Form";
import ItemsList from "../ItemsList/ItemsList";
import styles from "./InputItemsBody.module.scss";

const InputItemsBpdy = () => {
  const [items, setItems] = useState([]);

  const [userInput, setUserInput] = useState("");

  const [editing, setEditing] = useState(false);

  const [Id, setId] = useState(0);

  const [texChange, setTextChange] = useState();

  const handleUserInput = useCallback((e, id) => {
    setUserInput(e.target.value);
  }, []);

  const handleOnSubmit = useCallback(() => {
    setItems([
      ...items,
      {
        id: Math.random() * 1000,
        userInput: userInput,
        checked: false,
      },
    ]);
    setUserInput("");
  }, [items, userInput]);

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
    setEditing(false);
    setUserInput("");
  }, []);

  const handleOnEdit = useCallback(
    (todoid) => {
      const itemsClone = structuredClone(items);

      itemsClone.forEach((item) => {
        if (item.id === todoid) {
          setUserInput(item.userInput);
          setId(item.id);
        }
      });
      setItems(itemsClone);
      setEditing(true);
    },
    [items]
  );

  console.log(Id);

  const handleEditBtnChange = useCallback(
    (todoid) => {
      const itemsClone = structuredClone(items);

      itemsClone.forEach((item) => {
        if (todoid === Id) {
          item.userInput = userInput;
        }
        return item;
      });
      setItems(itemsClone);
      setUserInput("");
    },
    [Id, items, userInput]
  );

  return (
    <div className={styles.InputItemsBody}>
      <Form
        onChange={handleUserInput}
        userInput={userInput}
        onSubmit={handleOnSubmit}
        setEditing={setEditing}
        editing={editing}
        onEdit={handleEditBtnChange}
      />
      <ItemsList
        items={items}
        onCheck={handleOnChecked}
        onDelete={handleOnItemDelete}
        onClear={handleOnClear}
        onEdit={handleOnEdit}
      />
    </div>
  );
};

export default InputItemsBpdy;
