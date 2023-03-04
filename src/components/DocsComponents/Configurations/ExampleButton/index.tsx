import React from "react";
import styles from "./styles.module.scss";

function ExampleButton() {
  return (
    <button
      type="button"
      className={styles["example-btn"]}
      onClick={() => alert("Example from React component")}
    >
      Example Button
    </button>
  );
}

export default ExampleButton;
