import React, { Component } from "react"
import { View, Text, Button, Image, Platform, StyleSheet } from 'react-native';
import ContactStyles from "./contactStyles"

export default class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <View style={ContactStyles.container}>
            <Image style={ContactStyles.image} source={this.props.image} />
            <View style={ContactStyles.details}>
                <Text style={ContactStyles.email}>{this.props.email}</Text>
                <Text style={ContactStyles.subject} >{this.props.subject}</Text>
                <Text style={ContactStyles.text} >{this.props.text}</Text>
            </View>
        </View>;
    }
}


