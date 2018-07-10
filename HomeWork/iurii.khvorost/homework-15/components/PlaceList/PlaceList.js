import React from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "../ListItem/ListItem";

const PlaceList = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      renderItem={(info) => (
        <ListItem
          placeName={info.item.name}
          placeImage={info.item.image}
          checked={info.item.checked}
          onItemPressed={() => props.onItemSelected(info.item.key)}
          onCheckPlaсe={() => props.onCheckPlace(info.item.key)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  }
});

export default PlaceList;
