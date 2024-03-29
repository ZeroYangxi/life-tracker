import Block from "../Block/Block";
import styles from "./BlockList.module.css";

const BlockList = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>Header1</div>
        <div className={styles.header}>date</div>
        <div className={styles.header}>Header3</div>
        <div className={styles.taskName}>Task Name</div>
        <div className={styles.blockList}>
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
        </div>
      </div>
    </>
  );
};

export default BlockList;
