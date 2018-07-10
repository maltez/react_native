import React from "react";
import { Modal, View, Image, Text, Button, StyleSheet } from "react-native";
import { Constants } from 'expo';

const placeDetail = props => {
  return props.selectedPlace ? <Modal
      onRequestClose={props.onModalClosed}
      visible={props.selectedPlace !== null}
      animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.buttons}>
          <Button title="Delete" color="red" onPress={props.onItemDeleted} />
          <Button title="Close" onPress={props.onModalClosed} />
        </View>
        <View style={{flex: 1}}>
          <Image source={props.selectedPlace.image} style={styles.placeImage} />
          <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
        </View>
      </View>
    </Modal> 
    : <View></View>;
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
  placeImage: {
    height: 300
  },
  placeName: {
    paddingTop: 20,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default placeDetail;
