import React, { ReactElement } from "react";
import { Grid } from "@material-ui/core";

import airConditioner from "../../assets/icons/ac.svg";
import styles from "./AirConditioner.module.scss";
import Box from "../common/Box";

const AirConditioner = (): ReactElement => {
  return (
    <Grid
      item
      className={styles.acContainer}
    >
      <Box
        hasBorder
        hasPadding
        className={styles.acContainer}
      >
         <div className={styles.acContainer}>
          <img src={airConditioner} alt="ac" /> <span>Air conditioner</span>
        </div>
      </Box>
    </Grid>
  );
};

export default AirConditioner;
