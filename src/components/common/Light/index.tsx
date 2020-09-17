import React, { ReactElement } from "react";

import styles from "./Light.module.scss";

const Light = (): ReactElement => {
  return (
    <div className={styles.oneLight}>
      <input type="range" />
    </div>
  );
};

export default Light;
