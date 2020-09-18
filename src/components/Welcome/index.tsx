import React, { ReactElement, useEffect, useState } from "react";
import { format } from "date-fns";

import Box from "../common/Box";
import { createVerb, getWeatherData, WeatherData } from "../../api/weather";

import styles from "./Welcome.module.scss";

const Welcome = (): ReactElement => {
  const [weatherData, setWeatherData] = useState<WeatherData>();
  useEffect(() => {
    getWeatherData().then((result: WeatherData) => {
      setWeatherData(result);
    });
  }, []);
  return (
    <Box hasPadding className={styles.welcomeContainer}>
      <h1>Welcome home</h1>
      <div className={styles.innerContainer}>
        <p>
          Today is <span>{format(new Date(), "iiii")}</span>
        </p>
      </div>
      <div className={styles.innerContainer}>
        <p>
          It's currently {createVerb(weatherData?.weather[0]).text}, and{" "}
          <span> {`${weatherData?.main.temp}°c`} </span>
        </p>
      </div>
    </Box>
  );
};

export default Welcome;
