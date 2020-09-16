import React, { useEffect, useState } from "react";
import { View, Dimensions, StyleSheet, Image } from "react-native";
import { WiSnow } from "weather-icons-react";
import { format } from "date-fns";
import moment from "moment";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import TrainIcon from "@material-ui/icons/Train";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
// import { useDispatch } from "react-redux";

import { Box, colors, Text } from "./theme/colors";
import { eventsApi } from "./fakeApi/events";
import { getLeavingTrains, TimeTable } from "./api/trains";
import { getFinnishNews, getHungarianNews, News } from "./api/news";
import Temperature from "./components/Temperature";

const rainIcon = {
  src: require("./assets/icons/water_drop.svg"),
  width: 12,
  heigh: 18,
};

const temperatureIcon = {
  src: require("./assets/icons/temperature.svg"),
  width: 12,
  heigh: 18,
};

const { width } = Dimensions.get("window");

const rootStyles = StyleSheet.create({
  rootContainer: {
    padding: 20,
    width,
    backgroundColor: colors.mainAppColor,
    display: "flex",
    flexDirection: "row",
  },
  weatherIconContainer: {
    position: "relative",
    top: -8,
  },
  eventContainer: {
    paddingHorizontal: 20,
  },
  leftContainer: {
    width: width * 0.7,
  },
  rightContainer: {
    flex: 1,
  },
  oneEvent: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: colors.mainAppColor,
    borderRadius: 5,
    alignItems: "center",
  },
  oneTrain: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.orange,
  },
  eventDate: {
    opacity: 0.7,
    display: "flex",
    alignItems: "center",
  },
  center: {
    alignItems: "center",
  },
  oneNews: {
    marginVertical: 5,
    fontSize: 18,
    color: "#ffffff",
    lineHeight: 25,
  },
  newsHeader: {
    marginBottom: 10,
    fontSize: 24,
    color: "#ffffff",
  },
  metaContainer: {
    height: 30,
  },
  oneMeta: {
    display: "flex",
    alignItems: "center",
    width: 80,
    height: 30,
    flexDirection: "row",
  },
  metaText: {
    color: "#ffffff",
    marginLeft: 10,
  },
});

const App = () => {
  const [trains, setTrains] = useState<Array<TimeTable>>([]);
  const [hungarianNews, setHungarianNews] = useState<Array<News>>([]);
  const [finnishNews, setFinnishNews] = useState<Array<News>>([]);
  useEffect(() => {
    getLeavingTrains().then((result: TimeTable[]) => {
      setTrains(result);
    });
    getHungarianNews().then((result: News[]) => {
      setHungarianNews(result);
      // console.debug('index', result)
    });
    getFinnishNews().then((result: News[]) => {
      setFinnishNews(result);
      // console.debug('iltalehti', result)
    });
  }, []);
  return (
    <View style={[rootStyles.rootContainer]}>
      <Box
        flexDirection="column"
        alignContent="center"
        justifyContent="flex-start"
        margin="s"
        style={[rootStyles.leftContainer]}
      >
        <Box
          padding="l"
          borderRadius="m"
          borderWidth={3}
          borderColor="purpleLight"
          margin="s"
        >
          <Text variant="header" marginBottom="s">
            Welcome Home
          </Text>
          <Text variant="subHeader" marginBottom="s" marginTop="s">
            {format(new Date(), "'Today is' iiii")}
          </Text>
          <Text variant="subHeader">
            It's currently snowing,
            <View style={[rootStyles.weatherIconContainer]}>
              <WiSnow size={36} color="#ffffff" />
            </View>
            and -19°c outside.
          </Text>
        </Box>

        <Box
          padding="s"
          borderRadius="m"
          margin="s"
          style={rootStyles.metaContainer}
          flexDirection="row"
          justifyContent="flex-end"
        >
          <View style={[rootStyles.oneMeta]}>
            <Image
              source={rainIcon.src}
              style={{
                width: rainIcon.width,
                height: rainIcon.heigh,
              }}
            />
            <Text style={[rootStyles.metaText]}>35%</Text>
          </View>
          <View style={[rootStyles.oneMeta]}>
            <Image
              source={temperatureIcon.src}
              style={{
                width: temperatureIcon.width,
                height: temperatureIcon.heigh,
              }}
            />
            <Text style={[rootStyles.metaText]}>-19 °c</Text>
          </View>
        </Box>

        <Box flexDirection="row">
          <Box
            margin="s"
            borderRadius="m"
            backgroundColor="purpleLight"
            justifyContent="center"
            padding="m"
            width={400}
          >
            <Text style={[rootStyles.newsHeader]}>🇭🇺 Index</Text>
            {hungarianNews.map((currentNews: News) => (
              <Text style={[rootStyles.oneNews]}>{currentNews.title}</Text>
            ))}
          </Box>
          <Box
            margin="s"
            borderRadius="m"
            backgroundColor="purpleLight"
            justifyContent="center"
            padding="m"
            flex={1}
          >
            <Text style={[rootStyles.newsHeader]}>🇫🇮 Iltalehti</Text>
            {finnishNews.map((currentNews: News) => (
              <Text style={[rootStyles.oneNews]}>{currentNews.title}</Text>
            ))}
          </Box>
        </Box>
        <Temperature />
      </Box>
      <Box
        flexDirection="column"
        alignContent="center"
        justifyContent="flex-start"
        margin="s"
        style={[rootStyles.rightContainer]}
      >
        <Box
          margin="s"
          borderRadius="m"
          backgroundColor="orange"
          justifyContent="center"
          padding="m"
          style={[rootStyles.eventContainer]}
        >
          <Text style={{ marginBottom: 10 }} variant="header">
            Upcoming events
          </Text>
          {eventsApi.getAllEvents().map((currentEvent) => (
            <Box key={currentEvent.id}>
              <Text style={[rootStyles.oneEvent]} variant="body">
                {currentEvent.title}
                <Text style={[rootStyles.eventDate]}>
                  <View style={{ marginHorizontal: 10 }}>
                    <AccessTimeIcon />
                  </View>{" "}
                  {currentEvent.time}
                </Text>
              </Text>
            </Box>
          ))}
        </Box>
        <Box
          margin="s"
          borderRadius="m"
          backgroundColor="mainAppColor"
          borderColor="purpleLight"
          borderWidth={3}
          padding="m"
        >
          <Text
            style={[rootStyles.center, { marginBottom: 10 }]}
            variant="header"
          >
            <TrainIcon fontSize="large" /> Trains leaving
          </Text>
          <Box>
            {trains.map((currentTrain) => (
              <Box style={{ marginBottom: 5 }} key={currentTrain.scheduledTime}>
                <Text variant="body" style={rootStyles.oneTrain}>
                  {moment(
                    moment
                      .utc(currentTrain.scheduledTime)
                      .local()
                      .format("YYYY-MM-DD HH:mm:ss")
                  ).fromNow()}
                  <View
                    style={[
                      rootStyles.center,
                      { marginHorizontal: 10, flexDirection: "row" },
                    ]}
                  >
                    <Text style={[rootStyles.center, { opacity: 0.3 }]}>
                      <TrendingFlatIcon /> Helsinki
                    </Text>
                  </View>
                </Text>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </View>
  );
};

export default App;
