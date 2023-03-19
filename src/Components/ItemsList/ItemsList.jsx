import Item from "../Item/Item";
import styles from "./ItemsList.module.scss";

const ItemsList = ({ items, onCheck, onDelete, onClear, onEdit }) => {
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
          onEdit={() => onEdit(item.id)}
        />
      ))}

      <p className={styles.ClearBtn} onClick={onClear}>
        Clear Items
      </p>
    </div>
  );
};

export default ItemsList;
