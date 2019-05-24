import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ApiClient from "../repository/api_client";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

class RootScreen extends React.Component<{}, {}> {
  readonly state = { data: null };

  public async componentDidMount() {
    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.1LOvGy6YD17jhvxhcG4vlPi26rN96fdYS8XZXObFPuk";
    const res = await ApiClient.get("/api/me", token);
    this.setState({ data: res.data });
  }

  public render() {
    const { data } = this.state;

    if (!data)
      return (
        <View style={styles.container}>
          <Text>this is not loaded Data</Text>
        </View>
      );

    return (
      <View style={styles.container}>
        <Text>this is RootScreen component</Text>
        <Text>{data.attributes.name}</Text>
        <Text>{data.attributes.nickname}</Text>
      </View>
    );
  }
}

export default RootScreen;
