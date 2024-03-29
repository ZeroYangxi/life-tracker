import { useState } from "react";
import styles from "./Block.module.css";

const Block = () => {
  const [completed, setCompleted] = useState(false);

  function handleClick() {
    setCompleted(!completed);
    console.log(completed);
  }

  return (
    <div
      className={
        completed
          ? [styles.block, styles.blockCompleted].join(" ")
          : styles.block
      }
      onClick={handleClick}
    ></div>
  );
};

export default Block;
