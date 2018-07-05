import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    
    this.state = {
      lastRefresh: Date(Date.now()).toString(),
    }
    
    this.refreshScreen = this.refreshScreen.bind(this);
  }

  refreshScreen() {
    this.setState({ lastRefresh: Date(Date.now()).toString() })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.horizontal}>
          <View style={styles.horizontal}>
              <View style={styles.vertical} backgroundColor={getRandomColor()}></View>
              <View style={styles.vertical} backgroundColor={getRandomColor()}></View>
              <View style={styles.vertical} backgroundColor={getRandomColor()}></View>
              <View style={styles.vertical} backgroundColor={getRandomColor()}></View>
              <View style={styles.vertical} backgroundColor={getRandomColor()}></View>
          </View>
          <View style={styles.vertical}>
              <View style={styles.vertical} backgroundColor={getRandomColor()}></View>
              <View style={styles.vertical} backgroundColor={getRandomColor()}></View>
              <View style={styles.vertical} backgroundColor={getRandomColor()}></View>
              <View style={styles.vertical} backgroundColor={getRandomColor()}></View>
              <View style={styles.vertical} backgroundColor={getRandomColor()}></View>
          </View>
        </View>

        <Button style={styles.button} title='Refresh Screen' onPress={this.refreshScreen}/>
        
        <View style={styles.horizontal}>
          <View style={styles.vertical}>
              <View style={styles.vertical} backgroundColor={getRandomColor()}></View>
              <View style={styles.vertical} backgroundColor={getRandomColor()}></View>
              <View style={styles.vertical} backgroundColor={getRandomColor()}></View>
              <View style={styles.vertical} backgroundColor={getRandomColor()}></View>
              <View style={styles.vertical} backgroundColor={getRandomColor()}></View>
          </View>
          <View style={styles.horizontal}>
              <View style={styles.vertical} backgroundColor={getRandomColor()}></View>
              <View style={styles.vertical} backgroundColor={getRandomColor()}></View>
              <View style={styles.vertical} backgroundColor={getRandomColor()}></View>
              <View style={styles.vertical} backgroundColor={getRandomColor()}></View>
              <View style={styles.vertical} backgroundColor={getRandomColor()}></View>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  horizontal: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: getRandomColor(),
  },
  vertical: {
    flex: 1,
    backgroundColor: getRandomColor(),
  },
  button: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

function getRandomNumber0to255() {
  return Math.floor(Math.random() * 255);
}

function getRandomColor() {
  return `rgb(${getRandomNumber0to255()},${getRandomNumber0to255()},${getRandomNumber0to255()})`;
}