import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  iconContainer: {
    width: 100,
    height: "100%",
    padding: 10,
  },
  icon: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "space-around",
    padding: 10,
  },
  text: {
    padding: 4,
    fontSize: 18,
  },
  subText: {
    padding: 4,
    fontSize: 12,
    color: "gray",
  },
});

const UserInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          style={styles.icon}
          source={{ uri: "https://picsum.photos/id/237/200/300" }}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.text}>ユーザの名前</Text>
        <Text style={styles.subText} numberOfLines={3}>
          ユーザの情報を記載する.....文字数制限あり......30文字表示までとする.................................................................................................................................................................................1
        </Text>
      </View>
    </View>
  );
};

export default UserInfo;
