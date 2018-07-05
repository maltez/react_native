import React, { Component } from 'react';
import img_red from  './01.png';
import img_blue from  './02.png';
import { View, Text, Button, Image, Platform } from "react-native";
import MyAwesomeStyle from './styles';

export class PrettyComponent extends Component {
    constructor(props){
        super(props);
        this.state = {img: true};
        this.onKeyPress = this.onKeyPress.bind(this);
    }

    onKeyPress() {
        this.setState({img: !this.state.img});
    }

    render() {
        return <View>
            <Text style={ MyAwesomeStyle.content }>This is my class component</Text>
            <Text style={ MyAwesomeStyle.content }>OS - {Platform.OS} - {Platform.Version}</Text>
            <Image source={this.state.img ? img_red : img_blue } />
            <Button onPress={this.onKeyPress} title='Change Avatar' />
        </View>
    }
}