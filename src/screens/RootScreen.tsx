import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const RootScreen: React.SFC<{}> = (): any => {
  return (
    <View style={styles.container}>
      <Text>this is RootScreen component</Text>
    </View>
  );
};

export default RootScreen;
