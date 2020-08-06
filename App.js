import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import articles from "./dummies/articles.json";

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    flex: 1,
  },
  userContainer: {
    flex: 1,
    flexDirection: "row",
  },
  userIconContainer: {
    width: 100,
    height: "100%",
    padding: 10,
  },
  userIcon: {
    width: 70,
    height: 70,
    borderRadius: 30,
    // padding: 10,
  },
  userInfoContainer: {
    flex: 1,
    justifyContent: "space-around",
    padding: 10,
  },
  userText: {
    padding: 4,
    fontSize: 18,
  },
  userSubText: {
    padding: 4,
    fontSize: 12,
    color: "gray",
  },
  listContainer: {
    flex: 6,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#FFFFFF",
    alignContent: "flex-start",
    justifyContent: "space-around",
  },
  square: {
    width: 120,
    height: 120,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default function App() {
  const listItem = articles.map((article, index) => {
    return (
      <View style={styles.square} key={index}>
        <Image style={styles.image} source={{ uri: article.urlToImage }} />
      </View>
    );
  });
  if (listItem.length % 3 != 0) {
    if (listItem.length % 3 == 1) {
      listItem.push(<View style={styles.square} key="empty1"></View>);
    }
    listItem.push(<View style={styles.square} key="empty2"></View>);
  }
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <View style={styles.userIconContainer}>
          <Image
            style={styles.userIcon}
            source={{ uri: "https://picsum.photos/id/237/200/300" }}
          />
        </View>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userText}>ユーザの名前</Text>
          <Text style={styles.userSubText} numberOfLines={3}>
            ユーザの情報を記載する.....文字数制限あり......30文字表示までとする...........................................................................................................................................................
          </Text>
        </View>
      </View>
      <View style={styles.listContainer}>{listItem}</View>
    </View>
  );
}
