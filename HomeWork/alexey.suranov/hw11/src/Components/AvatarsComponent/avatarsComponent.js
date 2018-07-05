import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Button } from "react-native";
import styles from "./styles.js";
import { ScrollView } from 'react-native-gesture-handler';


export default class AvatarsComponent extends Component {

    constructor(props) {
        super(props)
        this.state = { users: [], messages: [] }
    }
    componentDidMount() {
        this.getUsers();
        this.getMessages();
    }

    getUsers() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(function (response) {
                return response.json();
            })
            .then((data) => { 
                this.setState({users: data});   
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    getMessages() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(function (response) {
                return response.json();
            })
            .then((data) => { 
                this.setState({messages: data});   
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (<ScrollView style={styles.textHolder}>
            {this.state.users.length ? this.state.users.map((user, i) => {
                let message = {};
                this.state.messages.map((item, ind) => {
                    if (item.userId === user.id) {
                        message = item;
                    }
                });
                return (<View key={i} style={styles.container}>
                    <Image style={styles.avatar} source={{ uri: `https://randomuser.me/api/portraits/men/${user.id}.jpg` }} />
                    <View style={styles.textContainer}>
                        <Text style={styles.textTitle}>{message.title}</Text>
                        <Text style={styles.textDescription}>From: {user.name}</Text>
                        <Text style={styles.textDescription}>To: {user.email}</Text>
                        <Text style={styles.textDescription}>{message.body}</Text>
                    </View>
                </View>);
            }) : <Text>Loading...</Text>}
        </ScrollView>);
    }
}