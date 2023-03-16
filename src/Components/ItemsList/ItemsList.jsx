import Item from "../Item/Item";
import styles from "./ItemsList.module.scss";

const ItemsList = ({ items, onCheck, onDelete }) => {
  return (
    <div className={styles.ItemsList}>
      {items.map((item) => (
        <Item
          id={item.id}
          key={item.id}
          checked={item.checked}
          userInput={item.userInput}
          onCheck={() => onCheck(item.id)}
          onDelete={() => onDelete(item.id)}
        />
      ))}

      <p className={styles.ClearBtn}>Clear Items</p>
    </div>
  );
};

export default ItemsList;
