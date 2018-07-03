import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Cell from "./components/cell";

import styles from "./components/styles";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            styleId1: 0,
            styleId2: 1,
            styleId3: 2,
            styleId4: 3
        };
        this.__handleRotate = this.__handleRotate.bind(this);
    }
    __handleRotate() {
        let { styleId1, styleId2, styleId3, styleId4 } = this.state;

        styleId1 = styleId1 !== 3 ? (styleId1 += 1) : 0;
        styleId2 = styleId2 !== 3 ? (styleId2 += 1) : 0;
        styleId3 = styleId3 !== 3 ? (styleId3 += 1) : 0;
        styleId4 = styleId4 !== 3 ? (styleId4 += 1) : 0;

        this.setState({
            styleId1,
            styleId2,
            styleId3,
            styleId4
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Cell styleId={this.state.styleId1} />
                    <Cell styleId={this.state.styleId2} />
                </View>
                <View style={styles.button}>
                    <Button title="Click to Rotate" onPress={this.__handleRotate} />
                </View>
                <View style={styles.row}>
                    <Cell styleId={this.state.styleId4} />
                    <Cell styleId={this.state.styleId3} />
                </View>
            </View>
        );
    }
}
