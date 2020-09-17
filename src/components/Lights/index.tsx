import React, { ReactElement, useState } from "react";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import { Grid } from "@material-ui/core";

import Light from "../common/Light";
import Box from "../common/Box";
import { colors } from "../../theme/colors";
import Modal from "../common/Modal";

import styles from "./Lights.module.scss";

const Lights = (): ReactElement => {
  const [isModal, setModal] = useState(false);
  return (
    <Grid item>
      <Box
        isExpandable
        className={styles.lightsContainer}
        handler={
          <div className={styles.lightsHandler} onClick={() => setModal(true)}>
            <WbIncandescentIcon htmlColor={colors.orange} /> <span>Lights</span>
          </div>
        }
      />
      <Modal isModal={isModal} setModal={setModal}>
        <div className={styles.lightInnerContainer}>
          <Light />
          <Light />
          <Light />
          <Light />
        </div>
      </Modal>
    </Grid>
  );
};

export default Lights;
