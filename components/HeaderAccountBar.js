import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 15,
    paddingLeft: 10,
  },
  icon: {
    paddingTop: 3,
    paddingLeft: 5,
  },
});

const HeaderAccountBar = () => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => alert("user accounts select ")}
    >
      <Text>user name</Text>
      <Entypo style={styles.icon} name={"select-arrows"} size={15} />
    </TouchableOpacity>
  );
};

export default HeaderAccountBar;
