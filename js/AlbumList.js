import React from 'react';
import { StyleSheet, Text, View, Image,ScrollView } from 'react-native';
import albumData from "../albums.json"

const AlbumList = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
    <View style={styles.container1}>
      <Image style={styles.img1} source={{uri:albumData[0].image}} />
      <Image style={styles.img2} source={{uri:albumData[1].image}} />
    </View>
    <View style={styles.container2}>
      <Text style={styles.text1}>{albumData[0].title}</Text>
      <Text style={styles.text2}>{albumData[1].title}</Text>
    </View>
    <View style={styles.container3}>
      <Text style={styles.subtext1}>{albumData[0].artist}</Text>
      <Text style={styles.subtext2}>{albumData[1].artist}</Text>
    </View>
    <View style={styles.container1}>
      <Image style={styles.img1} source={{uri:albumData[2].image}} />
      <Image style={styles.img2} source={{uri:albumData[3].image}} />
    </View>
    <View style={styles.container2}>
      <Text style={styles.text3}>{albumData[2].title}</Text>
      <Text style={styles.text4}>{albumData[3].title}</Text>
    </View>
    <View style={styles.container3}>
      <Text style={styles.subtext3}>{albumData[2].artist}</Text>
      <Text style={styles.subtext4}>{albumData[3].artist}</Text>
    </View>
    <View style={styles.container1}>
      <Image style={styles.img1} source={{uri:albumData[4].image}} />
      <Image style={styles.img2} source={{uri:albumData[5].image}} />
    </View>
    <View style={styles.container2}>
      <Text style={styles.text5}>{albumData[4].title}</Text>
      <Text style={styles.text6}>{albumData[5].title}</Text>
    </View>
    <View style={styles.container3}>
      <Text style={styles.subtext5}>{albumData[4].artist}</Text>
      <Text style={styles.subtext6}>{albumData[5].artist}</Text>
    </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flexDirection:'row',
    padding:10,
  },
  container2: {
    flexDirection:'row',
  },
  container3: {
    flexDirection:'row',
  },
  img1:{
    width:150,
    height:150,
    marginRight:10,
    borderRadius:25,
  },
  img2:{
    width:150,
    height:150,
    marginLeft:10,
    borderRadius:25,
  },
  text1:{
    marginRight:10,
    fontSize: 20,
  },
  text2:{
    marginLeft:10,
    fontSize: 20,
  },
  text3:{
    marginRight:70,
    fontSize: 20,
  },
  text4:{
    marginLeft:70,
    fontSize: 20,
  },
  text5:{
    marginRight:60,
    fontSize: 20,
  },
  text6:{
    marginLeft:60,
    paddingRight:20,
    fontSize: 20,
  },
  subtext1:{
    marginRight:70,
    fontSize: 16,
    color:'dimgray',
  },
  subtext2:{
    marginLeft:70,
    fontSize: 16,
    color:'dimgray',
  },
  subtext3:{
    marginRight:65,
    fontSize: 16,
    color:'dimgray',
  },
  subtext4:{
    marginLeft:65,
    fontSize: 16,
    color:'dimgray',
  },
  subtext5:{
    marginRight:60,
    marginBottom:100,
    paddingLeft:10,
    fontSize: 16,
    color:'dimgray',
  },
  subtext6:{
    marginLeft:60,
    marginBottom:100,
    paddingLeft:10,
    fontSize: 16,
    color:'dimgray',
  },
});

export default AlbumList;