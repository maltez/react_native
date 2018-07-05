import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {data: this.appendItems([])};
    this.onEndReached = this.onEndReached.bind(this);
  }

  appendItems(data) {
    let length = data.length;
    for (let i=0; i<200; i++) {
      let key = `${i + length}`;
      data.push({key: key, text: 'Item ' + key});
    }
    return data;
  }

  onEndReached() {
    this.setState({data: this.appendItems(this.state.data)});
  }

  render() {
    return <View style={{flex: 1, padding: 20, paddingTop: Constants.statusBarHeight}}>
      <FlatList 
        data={this.state.data} 
        renderItem={({item}) => <Text>{item.text}</Text>}
        onEndReached={this.onEndReached}
      />
    </View>
  }
}