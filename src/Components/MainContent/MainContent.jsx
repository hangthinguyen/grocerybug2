import Header from "../Header/Header";
import InputItemsBody from "../InputItemsBody/InputItemsBody";
import styles from "./MainContent.module.scss";

const MainContent = () => {
  return (
    <div className={styles.MainContent}>
      <Header />
      <InputItemsBody />
    </div>
  );
};

export default MainContent;
