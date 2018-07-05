import React, { Component } from 'react';
import { Text, View, ListView } from 'react-native';

export default class ListComponent extends Component {
  constructor(props){
    super(props);

    this.ds = new ListView.DataSource({rowHasChanged: function(){}});
    
    this.state = {
      dataSource: this.ds.cloneWithRows([{a:`col 0 - row -1` , b:`col 0 - row -1`}]),
      source: []
    };

    this.endReached = this.endReached.bind(this);
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
        dataSource: this.ds.cloneWithRows(source),
        source
      })
    },2000);
  }

  endReached(){
    alert('End reached');
  }

  render() {
    return (
      <View>
          <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) => <View><Text>{rowData.a}|{rowData.b}</Text></View>}
              pageSize={20}
              onEndReached={this.endReached}
              onEndReachedThreshold={1}
            />
      </View>
    );
  }
}

