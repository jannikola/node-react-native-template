import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [data, setData] = useState("");

  function getData() {
    return fetch("http://10.0.2.2:3000/v1/initial", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setData(responseJson);
        return responseJson.club;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <View style={styles.container}>
      <Text>{data.club}</Text>
      <Text>{data.league}</Text>
      <Text>{data.website}</Text>
      <Text>{data.position}</Text>
      <Text>{data.stadium}</Text>
      <Button title="Get Data" onPress={getData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
