import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NativeRouter, Link, Route } from 'react-router-native'
import FlattenComponent  from './Components/FlattenViewComponent/flattenListComponent';
import ListComponent  from './Components/ListViewComponent/listViewComponentr'

export default class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <View>
            <Link to='/'><Text>Flatten</Text></Link>
            <Link to='/list'><Text>ListView</Text></Link>
          </View>
          <Route exact path='/' component={FlattenComponent} />
          <Route path='/list'  component={ListComponent} />
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    backgroundColor:'red'
  }
});
