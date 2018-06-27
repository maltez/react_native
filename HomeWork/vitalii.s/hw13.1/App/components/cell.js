import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";



export default class Cell extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={styles.cell}>
                <View style={styles.arrayStyles[this.props.styleId].cellElements}>
                    <View style={styles.arrayStyles[this.props.styleId].element1} />
                    <View style={styles.arrayStyles[this.props.styleId].element2} />
                    <View style={styles.arrayStyles[this.props.styleId].element3} />
                </View>
            </View>
        );
    }
}
