import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const CameraScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Camera screen</Text>
    </View>
  );
};

export default CameraScreen;
