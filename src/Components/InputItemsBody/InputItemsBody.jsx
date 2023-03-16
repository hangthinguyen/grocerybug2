import { useCallback, useState } from "react";
import Form from "../Form/Form";
import ItemsList from "../ItemsList/ItemsList";
import styles from "./InputItemsBody.module.scss";

const InputItemsBpdy = () => {
  const [items, setItems] = useState([]);

  const handleOnSubmit = useCallback(
    (userInput) => {
      setItems([
        ...items,
        {
          id: Math.random() * 1000,
          userInput: userInput,
          checked: false,
        },
      ]);
    },
    [items]
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

  return (
    <div className={styles.InputItemsBody}>
      <Form onSubmit={handleOnSubmit} />
      <ItemsList
        items={items}
        onCheck={handleOnChecked}
        onDelete={handleOnItemDelete}
      />
    </div>
  );
};

export default InputItemsBpdy;
