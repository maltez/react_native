import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native'
import { Constants } from 'expo';

function randomColor() {
  let r = Math.random() * 10;
  let g = Math.random() * 10;
  let b = Math.random() * 10;
  return "#" + parseInt(r, 10) + parseInt(g, 10) + parseInt(b, 10);
}

function cells(count) {
  let row = [];
  for (let i=0; i<count; i++) {
    row.push(<View key={i} style={{flex: 1, backgroundColor: randomColor()}} />);
  }
  return row;
}

const Desk1 = (props) => {
  var rows = [];
  for (let i=0; i<8; i++) {
    rows.push(<View key={i} style={{flex: 1, flexDirection: "row"}}>{cells(8)}</View>);
  }
  return <View style={{flex: 1}}>{rows}</View>;
}

let deskCells = [];
deskCells.push({direction: "column", cells: cells(4)});
deskCells.push({direction: "row", cells: cells(4)});
deskCells.push({direction: "column", cells: cells(4)});
deskCells.push({direction: "row", cells: cells(4)});

const Desk2 = (props) => {
  
  deskCells.unshift(deskCells.pop());

  return <View style={{flex: 1}}>
    <View style={{flex: 1, flexDirection: "row"}}>
      <View style={{flex: 1, flexDirection: deskCells[0].direction }}>{deskCells[0].cells}</View>
      <View style={{flex: 1, flexDirection: deskCells[1].direction }}>{deskCells[1].cells}</View>
    </View>
    <View style={{flex: 1, flexDirection: "row"}}>
      <View style={{flex: 1, flexDirection: deskCells[3].direction }}>{deskCells[3].cells}</View>
      <View style={{flex: 1, flexDirection: deskCells[2].direction }}>{deskCells[2].cells}</View>
    </View>
  </View>;
}

export default class App extends Component {
  render() {
    return <NativeRouter>
          <View style={{flex: 1, paddingTop: Constants.statusBarHeight, margin: 20}}>
            <View style={{flexDirection: "row", justifyContent: 'space-between', paddingBottom: 20}}>
              <Link to=""><Text>First</Text></Link>
              <Link to="/second"><Text>Second</Text></Link>
            </View>
            <Route exact path="/" component={Desk1} />
            <Route path="/second" component={Desk2} />
          </View>
        </NativeRouter>;
  }
}