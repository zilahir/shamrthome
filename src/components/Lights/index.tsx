import React, { ReactElement } from "react";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import { Grid } from "@material-ui/core";

import Light from "../common/Light";
import Box from "../common/Box";
import { colors } from "../../theme/colors";

import styles from "./Lights.module.scss";

const LightHandler = (): ReactElement => (
  <div className={styles.lightsHandler}>
    <WbIncandescentIcon htmlColor={colors.orange} /> <span>Lights</span>
  </div>
);

const Lights = (): ReactElement => {
  return (
    <Grid item>
      <Box
        isExpandable
        className={styles.lightsContainer}
        handler={<LightHandler />}
      >
        <Light />
        <Light />
        <Light />
        <Light />
      </Box>
    </Grid>
  );
};

export default Lights;
