import React from "react";
import { StyleSheet } from "react-native";
import ImagePicker from "../components/ImagePicker";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const CameraScreen = () => {
  return <ImagePicker />;
};

export default CameraScreen;
