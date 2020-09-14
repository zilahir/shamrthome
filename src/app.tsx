import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { format } from "date-fns";
import { WiSnow } from "weather-icons-react";
// import { useDispatch } from "react-redux";

import { Box, colors, Text } from "./theme/colors";

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
  eventDetails: {
    backgroundColor: colors.mainAppColor,
    borderRadius: 100,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  eventContainer: {
    paddingHorizontal: 20,
  },
  center: {
    alignItems: "center",
  },
  eventTitle: {
    marginRight: 10,
  },
  eventList: {
    marginLeft: 5,
    marginTop: 10,
  },
});

const App = () => {
  return (
    <View style={[rootStyles.rootContainer]}>
      <Box
        flexDirection="column"
        alignContent="center"
        justifyContent="flex-start"
        margin="s"
        flex={1}
      >
        <Box
          padding="l"
          borderRadius="xl"
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
        flex={1}
      >
        <Box
          margin="s"
          borderRadius="xl"
          borderWidth={3}
          borderColor="purpleLight"
          backgroundColor="orange"
          justifyContent="center"
          padding="m"
          style={[rootStyles.eventContainer]}
        >
          <Text
            style={[rootStyles.center, { paddingBottom: 10 }]}
            variant="subHeader"
          >
            <Text style={[rootStyles.eventDetails, rootStyles.eventTitle]}>
              1
            </Text>{" "}
            event today
          </Text>
          <Text style={[rootStyles.eventList]} variant="body">
            at 16:30 – Oskari coming
          </Text>
        </Box>
      </Box>
    </View>
  );
};

export default App;
