import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Platform,
} from "react-native";
import ListItem from "./components/ListItem";
import UserInfo from "./components/UserInfo";

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 25 : 0,
    flex: 1,
  },
});

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <UserInfo />
        <ListItem />
      </ScrollView>
    </SafeAreaView>
  );
}
