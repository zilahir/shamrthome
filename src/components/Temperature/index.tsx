import React, { ReactElement, useState } from "react";
import { Grid } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import classnames from "classnames"
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

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

const ONEPERCENTAGE = 0.3

const percentage = (temperate: number):number => (
  temperate * ONEPERCENTAGE * 10
)

const checkTemperature = (temperature: number, direction: "PLUS" | "MINUS") => (
  direction === "PLUS" ? temperature <= 5 : temperature >= 33
)

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
            <span
              onClick={() => setTemperature(currentValue => currentValue - 1)}
              className={classnames(
                checkTemperature(currentTemp, "PLUS") ? styles.disabled : "",
              )}
            >
              <IndeterminateCheckBoxIcon
                htmlColor={colors.purleLight}
                fontSize="large"
              />
            </span>
            <span
              onClick={() => setTemperature(currentValue => currentValue + 1)}
              className={classnames(
                checkTemperature(currentTemp, "MINUS") ? styles.disabled : "",
              )}
            >
              <AddBoxIcon htmlColor={colors.purleLight} fontSize="large" />
            </span>
          </div>
          <div className={styles.temperatureInnerContainer}>
            <TempBg className={styles.bgImage} bgImage={temperatureBg}>
              <div className={styles.bgContainer}>
                <h1>{currentTemp}</h1>
              </div>
              <CircularProgressbar
                value={percentage(currentTemp)}
                className={styles.progressBar}
                strokeWidth={2}
                styles={buildStyles({
                  trailColor: "transparent",
                  pathColor: colors.orange,
                })}
              />
            </TempBg>
          </div>
        </div>
      </Modal>
    </Grid>
  );
};

export default Temperature;
