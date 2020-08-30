import React from "react";
import { StyleSheet, View, Image } from "react-native";
import articles from "../dummies/articles.json";

const styles = StyleSheet.create({
  container: {
    flex: 6,
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
  },
  articlesContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "red",
  },
  square: {
    width: "100%",
    flex: 1,
    aspectRatio: 1,
  },
  itemImage: {
    width: "100%",
    height: "100%",
  },
});

const ListItem = () => {
  let listArticles = [];
  articles.map((article, index) => {
    if (index % 3 == 0) {
      listArticles.push({
        article1: null,
        article2: null,
        article3: null,
        idx1: 0,
        idx2: 0,
        idx3: 0,
      });
      listArticles[listArticles.length - 1].article1 = article;
      listArticles[listArticles.length - 1].idx1 = index;
    } else if (index % 3 == 1) {
      listArticles[listArticles.length - 1].article2 = article;
      listArticles[listArticles.length - 1].idx2 = index;
    } else if (index % 3 == 2) {
      listArticles[listArticles.length - 1].article3 = article;
      listArticles[listArticles.length - 1].idx3 = index;
    }
  });
  const listItem = listArticles.map((articles, index) => {
    const el1 = (
      <View style={styles.square} key={articles.idx1}>
        <Image
          style={styles.itemImage}
          source={{ uri: articles.article1.urlToImage }}
        />
      </View>
    );
    const el2 =
      articles.article2 == null ? (
        <View style={styles.square} key="empty2"></View>
      ) : (
        <View style={styles.square} key={articles.idx2}>
          <Image
            style={styles.itemImage}
            source={{ uri: articles.article2.urlToImage }}
          />
        </View>
      );
    const el3 =
      articles.article3 == null ? (
        <View style={styles.square} key="empty1"></View>
      ) : (
        <View style={styles.square} key={articles.idx3}>
          <Image
            style={styles.itemImage}
            source={{ uri: articles.article3.urlToImage }}
          />
        </View>
      );
    console.log(articles.article3);
    return (
      <View key={index} style={styles.articlesContainer}>
        {el1}
        {el2}
        {el3}
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
