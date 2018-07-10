import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

class PlaceInput extends Component {
  constructor(props) {
    super(props);
    this.state = { placeName: "" };
  }

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    let placeName = this.state.placeName.trim();
    if (placeName !== "") {
      this.props.onPlaceAdded(this.state.placeName);
    }

    this.setState({placeName: ""});
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="An awesome place"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
          style={styles.placeInput}
        />
        <Button
          title="Add"
          style={styles.placeButton}
          onPress={this.placeSubmitHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    paddingBottom: 15
  },
  placeInput: {
    flex: 1,
    borderWidth: 1
  },
  placeButton: {
    paddingLeft: 15
  }
});

export default PlaceInput;
