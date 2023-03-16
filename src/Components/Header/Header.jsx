import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.Header}>
      <p className={styles.message1}>Please add an item</p>
      <p className={styles.message2}>Item Added to The List</p>
      <h1>Grocery Bud</h1>
    </div>
  );
};

export default Header;
