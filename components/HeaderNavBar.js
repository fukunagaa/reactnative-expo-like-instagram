import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});

const HeaderNavBar = () => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => alert("user nav open")}
    >
      <EvilIcons name={"navicon"} size={30} color="gray" />
    </TouchableOpacity>
  );
};

export default HeaderNavBar;
