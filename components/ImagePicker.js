import React, { useState, useEffect } from "react";
import { View, Text, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
};

const ImagePickerSample = () => {
  const [photo, setPhoto] = useState(null);

  // カメラの起動
  takePhoto = async () => {
    await ImagePicker.requestCameraPermissionsAsync();
    await ImagePicker.requestCameraRollPermissionsAsync();
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
    });

    console.log(result);

    if (!result.cancelled) {
      setPhoto(result.uri);
    }
  };

  // カメラロールから選択
  pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [16, 9],
    });

    console.log(result);

    if (!result.cancelled) {
      setPhoto(result.uri);
    }
  };
  return (
    <View style={styles.container}>
      <Text>Image Picker Sample</Text>

      <Button onPress={() => takePhoto()} title="カメラを起動" />

      <Button onPress={() => pickImage()} title="カメラロールから選択" />

      {photo && (
        <Image source={{ uri: photo }} style={{ width: 300, height: 300 }} />
      )}
    </View>
  );
};

export default ImagePickerSample;
