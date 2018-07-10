import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";
import { connect } from "react-redux";
import { Constants } from 'expo';

import PlaceInput from "./components/PlaceInput/PlaceInput";
import PlaceList from "./components/PlaceList/PlaceList";
import PlaceDetail from "./components/PlaceDetail/PlaceDetail";
import {
  addPlace,
  deletePlace,
  selectPlace,
  deselectPlace,
  checkPlace,
  deleteSelected
} from "./store/actions/index";

class App extends Component {
  constructor(props) {
    super(props);
  }

  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  };

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
  };

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  };

  placeSelectedHandler = key => {
    this.props.onSelectPlace(key);
  };

  onCheckPlace = key => {
    this.props.onCheckPlace(key);
  };

  onDeleteSelected = () => {
    this.props.onDeleteSelected();
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.props.places}
          onItemSelected={this.placeSelectedHandler}
          onCheckPlace={this.onCheckPlace}
        />
        <Button title="Delete Selected" color="red" onPress={this.onDeleteSelected} />
      </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: Constants.statusBarHeight
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: name => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: key => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace()),
    onCheckPlace: key => dispatch(checkPlace(key)),
    onDeleteSelected: () => dispatch(deleteSelected())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);