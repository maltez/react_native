import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import NewComponent from './newComponent/newComponent';
import { PrettyComponent } from './PrettyComponent/prettyComponent';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {text: 'Useless Multiline Placeholder'};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello world React Native is comming</Text>
        <NewComponent text="This is new component" />
        <PrettyComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
