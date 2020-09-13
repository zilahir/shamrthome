import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { format } from "date-fns";
import { WiSnow } from "weather-icons-react";

import { Box, colors, Text } from "./theme/colors";

const { width, height } = Dimensions.get("window");

const rootStyles = StyleSheet.create({
  rootContainer: {
    padding: 20,
    width,
    height,
    backgroundColor: colors.mainAppColor,
    display: "flex",
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
    marginRight: 10,
  },
  eventContainer: {
    alignItems: "center",
  },
  event: {
    marginTop: 10,
    marginLeft: 55,
  },
});

const App = () => (
  <View style={[rootStyles.rootContainer]}>
    <Box
      flexDirection="row"
      alignContent="center"
      justifyContent="center"
      margin="s"
    >
      <Box
        padding="l"
        borderRadius="xl"
        borderWidth={3}
        borderColor="purpleLight"
        flex={1}
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
      <Box
        margin="s"
        padding="l"
        borderRadius="xl"
        borderWidth={3}
        borderColor="purpleLight"
        backgroundColor="orange"
        flex={1}
      >
        <Text variant="subHeader" style={[rootStyles.eventContainer]}>
          <Text style={[rootStyles.eventDetails]}>1</Text> event today
        </Text>
        <Text style={[rootStyles.event]} variant="body">
          at 16:30 – Oskari coming
        </Text>
      </Box>
    </Box>
  </View>
);

export default App;
