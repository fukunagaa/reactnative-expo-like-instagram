import React from "react";
import { StyleSheet, View, Image } from "react-native";
import articles from "../dummies/articles.json";

const styles = StyleSheet.create({
  container: {
    flex: 6,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#FFFFFF",
    alignContent: "flex-start",
    justifyContent: "space-around",
  },
  square: {
    width: 130,
    height: 130,
  },
  itemImage: {
    width: "100%",
    height: "100%",
  },
});

const ListItem = () => {
  const listItem = articles.map((article, index) => {
    return (
      <View style={styles.square} key={index}>
        <Image style={styles.itemImage} source={{ uri: article.urlToImage }} />
      </View>
    );
  });
  if (listItem.length % 3 != 0) {
    if (listItem.length % 3 == 1) {
      listItem.push(<View style={styles.square} key="empty1"></View>);
    }
    listItem.push(<View style={styles.square} key="empty2"></View>);
  }
  return <View style={styles.container}>{listItem}</View>;
};

export default ListItem;
