// Import a library to help create a component
import React from "react";
import { View, Text, AppRegistry } from "react-native";
import Header from "./src/components/header";
import AlbumList from "./src/components/AlbumList";

// Create a component

const App = () => {
  return (
    <View style={{flex: 1}} >
      <Header headerText={"Albums"} />
      <AlbumList />
    </View>
  );
};

// render it to the device
// ReactNative.AppRegistry.registerComponent('albums', () => App);
AppRegistry.registerComponent("albums", () => App);
