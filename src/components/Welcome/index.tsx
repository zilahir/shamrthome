import React, { ReactElement, useEffect, useState } from "react";
import { format } from "date-fns";
import { LineChart, Line } from "recharts";

import Box from "../common/Box";
import { createVerb, getWeatherData, WeatherData } from "../../api/weather";
import { colors } from "../../theme/colors";

import styles from "./Welcome.module.scss";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Welcome = (): ReactElement => {
  const [weatherData, setWeatherData] = useState<WeatherData>();
  useEffect(() => {
    getWeatherData().then((result: WeatherData) => {
      setWeatherData(result);
    });
  }, []);
  return (
    <Box hasPadding className={styles.welcomeContainer}>
      <div>
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
      </div>
      <div className={styles.chartContainer}>
        <div className={styles.chartInner}>
          <LineChart
            width={1000}
            height={100}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <Line
              strokeWidth={3}
              type="monotone"
              dataKey="pv"
              stroke={colors.purleLight}
              dot={{
                stroke: colors.purleLight,
                fill: colors.purleLight,
                strokeWidth: 3,
              }}
            />
          </LineChart>
        </div>
      </div>
    </Box>
  );
};

export default Welcome;
