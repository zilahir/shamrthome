import React, { ReactElement, useState } from "react";
import { Grid } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import styled from "styled-components";

import Modal from "../common/Modal";
import Box from "../common/Box";
import temperatureIcon from "../../assets/icons/temperature.svg";
import { colors } from "../../theme/colors";
import temperatureBg from "../../assets/temperature_background.svg";

import styles from "./Temperature.module.scss";

interface HandlerProps {
  openModal: () => void;
}

interface TempBgProps {
  bgImage: string;
}

const TempBg = styled.div<TempBgProps>`
  background-image: url(${(props) => props.bgImage});
`;

const Handler = ({ openModal }: HandlerProps): ReactElement => (
  <div onClick={() => openModal()} className={styles.temperatureHandler}>
    <img src={temperatureIcon} alt="temperature" /> <span>Temperature</span>
  </div>
);

const Temperature = (): ReactElement => {
  const [isModalOpen, toggleModalOpen] = useState<boolean>(false);
  const [currentTemp, setTemperature] = useState<number>(16);
  return (
    <Grid item>
      <Box
        isExpandable
        handler={<Handler openModal={() => toggleModalOpen(!isModalOpen)} />}
      />
      <Modal isModal={isModalOpen} setModal={toggleModalOpen}>
        <div className={styles.temperatureContainer}>
          <div className={styles.btnContainer}>
            <span onClick={() => setTemperature(currentValue => currentValue - 1)}>
              <AddBoxIcon htmlColor={colors.purleLight} fontSize="large" />
            </span>
            <span onClick={() => setTemperature(currentValue => currentValue + 1)}>
              <IndeterminateCheckBoxIcon
                htmlColor={colors.purleLight}
                fontSize="large"
              />
            </span>
          </div>
          <div className={styles.temperatureInnerContainer}>
            <TempBg className={styles.bgImage} bgImage={temperatureBg}>
              <div className={styles.bgContainer}>
                <h1>{currentTemp}</h1>
              </div>
            </TempBg>
          </div>
        </div>
      </Modal>
    </Grid>
  );
};

export default Temperature;
