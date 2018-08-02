import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import CheckBox from "react-native-check-box";

const ListItem = props => (
  <View style={styles.listItem}>
    <CheckBox onClick={props.onCheckPlaсe} style={styles.checkbox} isChecked={props.checked} />
    <TouchableOpacity onPress={props.onItemPressed} style={styles.row} >
      <Image resizeMode="cover" source={props.placeImage} style={styles.placeImage} />
      <Text style={styles.text}>{props.placeName}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    padding: 10,
    margin: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
  },
  checkbox: {
    paddingRight: 10
  },
  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  placeImage: {
      width: 40,
      height: 40,
      paddingLeft: 20
  },
  text: {
    paddingLeft: 10,
    flex: 1,
}
});

export default ListItem;
