import React, { ReactElement, useEffect, useState } from "react";
import moment from "moment";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
import TrainIcon from "@material-ui/icons/Train";

import { getLeavingTrains, TimeTable } from "../../api/trains";
import Box from "../common/Box";

import styles from "./Train.module.scss";

const TrainSchedule = (): ReactElement => {
  const [trains, setTrains] = useState<Array<TimeTable>>([]);
  useEffect(() => {
    getLeavingTrains().then((result: TimeTable[]) => {
      setTrains(result);
    });
  }, []);
  return (
    <Box hasPadding className={styles.trainSchedule}>
      <h1>
        <TrainIcon fontSize="large" /> Trains leaving
      </h1>
      <ul>
        {trains.map((train: TimeTable) => (
          <li key={train.scheduledTime}>
            {moment(
              moment
                .utc(train.scheduledTime)
                .local()
                .format("YYYY-MM-DD HH:mm:ss")
            ).fromNow()}
            <span>
              <TrendingFlatIcon /> Helsinki
            </span>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default TrainSchedule;
