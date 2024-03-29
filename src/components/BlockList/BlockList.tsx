import Block from "../Block/Block";
import styles from "./BlockList.module.css";

const BlockList = () => {
  return (
    <div className={styles.blockList}>
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
    </div>
  );
};

export default BlockList;
