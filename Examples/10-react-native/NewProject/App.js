import React from 'react';
import { StyleSheet, Text, View, Button, Platform } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {msg: 0};

    this.__handleClick = this.__handleClick.bind(this);
  }

  __handleClick(){
    this.setState({msg: this.state.msg += 1});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>{this.state.msg} on {Platform.OS}</Text>
        <Button onPress={this.__handleClick} title='Click me'/>
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
