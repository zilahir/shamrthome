import React, { ReactElement, useEffect, useState } from "react";

import { getWeatherData, WeatherData } from "../../api/weather";
import temperatureIcon from "../../assets/icons/temperature.svg";
import waterIcon from "../../assets/icons/water_drop.svg";
import Box from "../common/Box";

import styles from "./Meta.module.scss";

const Meta = (): ReactElement => {
  const [weatherData, setWeatherData] = useState<WeatherData>();
  useEffect(() => {
    getWeatherData().then((result: WeatherData) => {
      setWeatherData(result);
    });
  }, []);
  return (
    <Box hasBorder={false} className={styles.metaContainer}>
      <div>
        <img src={waterIcon} alt="water" />
        <span>{`${weatherData?.main.humidity}%`}</span>
      </div>
      <div>
        <img src={temperatureIcon} alt="water" />
        <span>{`${weatherData?.main.temp}°c`}</span>
      </div>
    </Box>
  );
};

export default Meta;
