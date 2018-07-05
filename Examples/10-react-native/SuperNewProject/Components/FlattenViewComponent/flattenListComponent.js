import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView, FlatList } from 'react-native';

export default class FlattenComponent extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      source: []
    };
    this.count = 0;
  }

  componentDidMount() {
    setInterval(()=> {
      this.count += 1;
      const source = [];
      for(let i = 0; i < 100; i ++) {
        source.push({a:`count ${this.count} - col 1 - row ${i}` , b:`col 2 - row ${i}`})
      }
      this.setState({
        source
      })
    },2000);
  }

  render() {
    return (
      <View>
          <FlatList 
            data = {this.state.source}
            renderItem = {({item}) => <Text>{item.a} | {item.b}</Text>} />
      </View>
    );
  }
}
