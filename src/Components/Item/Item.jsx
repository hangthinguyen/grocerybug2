import { faCircle, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Item.module.scss";

const Item = ({ userInput, checked, onCheck, onDelete, onEdit }) => {
  return (
    <div className={styles.Item}>
      <p>{userInput}</p>
      <div className={styles.icons}>
        <div onClick={onEdit}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </div>
        <div onClick={onCheck}>
          {checked ? (
            <FontAwesomeIcon icon={faCircleCheck} />
          ) : (
            <FontAwesomeIcon icon={faCircle} />
          )}
        </div>
        <div onClick={onDelete}>
          <FontAwesomeIcon icon={faTrashCan} />
        </div>
      </div>
    </div>
  );
};

export default Item;
