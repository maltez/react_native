import React from 'react';
import { StyleSheet, View } from 'react-native';
import _ from 'underscore';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        { generateChessBoard(8,8) }
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
  horizontal: {
    flex: 1,
    flexDirection: 'row'
  },
  vertical: {
    flex: 1
  },
});

function getRandomNumber0to255() {
  return Math.floor(Math.random() * 255).toString(16);
}

function getRandomColor() {
  return `#${getRandomNumber0to255()}${getRandomNumber0to255()}${getRandomNumber0to255()}`;
}

function generateChessBoard(rowCellsNum, columnCellsNum) {
  return _.range(0, rowCellsNum).map((key) => (
    <View key={key} style={styles.horizontal}>
      {_.range(0, columnCellsNum).map((key) => 
        <View key={key} style={styles.vertical} backgroundColor={getRandomColor()}/>)
      }
    </View>))
}
