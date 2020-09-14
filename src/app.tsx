import React, { useEffect } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { format } from "date-fns";
import { WiSnow } from "weather-icons-react";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
// import { useDispatch } from "react-redux";

import { Box, colors, Text } from "./theme/colors";
import { eventsApi } from "./fakeApi/events";
import { getLeavingTrains } from "./api/trains";

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
  eventDate: {
    opacity: 0.7,
    display: "flex",
    alignItems: "center",
  },
});

const App = () => {
  useEffect(() => {
    getLeavingTrains().then((result) => {
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
            {format(new Date(), "'Today is a' iiii")}
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
          padding="l"
        >
          <Text style={{ marginBottom: 10 }} variant="header">
            Trains leaving
          </Text>
        </Box>
      </Box>
    </View>
  );
};

export default App;
