import React from 'react';
import { StyleSheet, Text, View, Image,ScrollView } from 'react-native';
import Header from "./js/Header";
import Albumlist from "./js/AlbumList";

const App = () => {
  return (
      <View>
        <Header />
        <Albumlist />
      </View>
    );
}

const styles = StyleSheet.create({

});

export default App;