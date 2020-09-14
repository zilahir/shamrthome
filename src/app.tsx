import React, { useEffect, useState } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
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

const { width, height } = Dimensions.get("window");

const rootStyles = StyleSheet.create({
  rootContainer: {
    padding: 20,
    width,
    height,
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
});

const App = () => {
  const [trains, setTrains] = useState<Array<TimeTable>>([]);
  useEffect(() => {
    getLeavingTrains().then((result: TimeTable[]) => {
      setTrains(result);
      console.debug("result", result);
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
          borderRadius="l"
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
          borderRadius="l"
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
          borderRadius="l"
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
