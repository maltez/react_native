import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Constants } from 'expo';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.containerTop}>
              <TextInput style={styles.mainTextInput} multiline={true}/>
              <View style={styles.containerRightPanel}>
                <TouchableOpacity style={styles.button}><Text>Print</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button}><Text>Total</Text></TouchableOpacity>
              </View>
          </View>
          <View style={styles.containerBottomPanel}>
              <View style={styles.inputsView}>
                  <View style={styles.input}>
                      <Text>Item</Text>
                      <TextInput style={styles.textInput}/>
                  </View>
                  <View style={styles.input}>
                      <Text>Count</Text>
                      <TextInput style={styles.textInput}/>
                  </View>
              </View>
              <View style={styles.containerRightPanel}>
                <TouchableOpacity style={styles.button}><Text>ADD</Text></TouchableOpacity>
              </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#EEEEEE',
    paddingTop: Constants.statusBarHeight + 15
  },
  containerTop: {
    flex: 1,
    flexDirection: 'row',
  },
  mainTextInput: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerRightPanel: {
    width: '40%',
    flexDirection: 'column',
    alignSelf: 'flex-end',
    paddingLeft: 10
  },
  containerBottomPanel: {
    flexDirection: 'row',
    paddingBottom: 10,
    paddingTop: 20
  },
  button: {
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#CCCCCC',
  },
  inputsView: {
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row'
  },
  input: {
    width: '40%',
  },
  textInput: {
    marginTop: 10,
    backgroundColor: 'white',
  },
});
