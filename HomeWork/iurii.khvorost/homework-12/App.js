import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Constants } from 'expo';

const onPress = () => {
}

const BorderButton = (props) => {
  return  <View style={[{height: 40, borderWidth: 1, marginTop: 20}, props.style]}>
    <Button title={props.title} onPress={onPress} />
  </View>
};

const BorderTextInput = (props) => {
  return  <View style={[{flex: 1}, props.style]}>
      <Text style={{fontSize: 17}}>{props.title}</Text>
      <TextInput value="" style={{borderWidth: 1, height: 40 }} />
    </View>
};

export default class App extends Component {
  render() {
    return (
      <View style={AppStyle.container}>
        <View style={AppStyle.row}>
          <View style={{flex: 2 }}>
            <View style={AppStyle.check}>
              <Text>Check</Text>
            </View>
            <View style={{flexDirection: "row", paddingTop: 20}}>
              <BorderTextInput title="Item" />
              <BorderTextInput title="Count" style={{paddingLeft: 10}} />
            </View>
          </View>
          <View style={{flex: 1, paddingLeft: 20}}>
              <View style={{flex: 1}} />
              <BorderButton title="Print" />
              <BorderButton title="Total" />
              <BorderButton title="Add" style={{marginTop: 40}} />
          </View>
        </View>
      </View>
    );
  }
}

const AppStyle = StyleSheet.create({
  container: { flex: 1, paddingTop: Constants.statusBarHeight, margin: 20},
  row: { flex: 1, flexDirection: "row" },
  check: { flex: 1, borderWidth: 1, alignItems: "center", paddingTop: 20 }
});