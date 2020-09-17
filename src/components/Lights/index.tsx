import React, { ReactElement } from "react";

import Light from "../common/Light";

import styles from "./Lights.module.scss";

const Lights = (): ReactElement => {
  return (
    <div className={styles.lightContainer}>
      <Light />
    </div>
  );
};

export default Lights;
