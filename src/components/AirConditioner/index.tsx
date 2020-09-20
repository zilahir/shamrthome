import React, { ReactElement, useState } from "react";
import { Grid } from "@material-ui/core";
import classname from "classnames";

import airConditioner from "../../assets/icons/ac.svg";
import airConditionerOn from "../../assets/icons/ac_on.svg";
import Box from "../common/Box";

import styles from "./AirConditioner.module.scss";

const AirConditioner = (): ReactElement => {
  const [isAcOn, toggleAcOn] = useState<boolean>(false);
  return (
    <Grid item className={styles.acContainer}>
      <span onClick={() => toggleAcOn((currValue) => !currValue)}>
        <Box
          hasBorder
          hasPadding
          className={classname(
            styles.acContainer,
            isAcOn ? styles.on : styles.off
          )}
        >
          <div className={styles.acContainer}>
            <img src={!isAcOn ? airConditioner : airConditionerOn} alt="ac" />{" "}
            <span>Air conditioner</span>
          </div>
        </Box>
      </span>
    </Grid>
  );
};

export default AirConditioner;
