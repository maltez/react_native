import React, { Component } from 'react';
import img_red from  './01.png';
import img_blue from  './02.png';
import { View,  Button, Image, ListView } from "react-native";

export class PrettyComponent extends Component {
    constructor(props){
        super(props);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows(['my row 1', 'my row 2']),
          img: true
        };
        this.onKeyPress = this.onKeyPress.bind(this);
    }

    onKeyPress() {
        this.setState({img: !this.state.img});
    }

    render() {
        return <View>
            <Image source={this.state.img ? img_red : img_blue } />
            <Button onPress={this.onKeyPress} title='Change Avatar' />
        </View>
    }
}