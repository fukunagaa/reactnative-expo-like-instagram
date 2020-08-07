import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import ListItem from "../components/ListItem";
import UserInfo from "../components/UserInfo";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const UserScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <UserInfo />
        <ListItem />
      </ScrollView>
    </View>
  );
};

export default UserScreen;
