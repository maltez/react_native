import React from 'react';
import { View, StyleSheet } from 'react-native';
import AvatarsComponent from './src/Components/AvatarsComponent/avatarsComponent';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Multiline Placeholder' };
  }
  render() {
    return (
      <View style={styles.container}>
        <AvatarsComponent />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    margin: 20,
    marginTop: 40,
  },
});