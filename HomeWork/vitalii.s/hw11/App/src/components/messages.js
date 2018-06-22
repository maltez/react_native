import React, { Component } from "react";
import { ScrollView, View, Text, Image } from "react-native";

import styles from "./styles";

const GET = url =>
    new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/" + url)
            .then(function(response) {
                resolve(response.json());
            })
            .catch(function(error) {
                reject(error);
            });
    });

const MessageRecord = props => {
    return (
        <View style={styles.messageContainer}>
            <View style={styles.avatarContainer}>
                <Image
                    style={styles.avatar}
                    source={{ uri: `https://randomuser.me/api/portraits/men/${props.user.id}.jpg` }}
                />
            </View>
            <View style={styles.messageDetail}>
                <Text>From: {props.user.name}</Text>
                <Text>To: {props.user.email}</Text>
                <Text numberOfLines={2}>Subject: {props.message.title}</Text>
            </View>
        </View>
    );
};

export default class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = { users: [], messages: [] };
    }

    componentDidMount() {
        this.getUsers();
        this.getMessages();
    }

    async getUsers() {
        try {
            let users = await GET("users");
            if (users) {
                this.setState({ users });
            }
        } catch (error) {
            console.log(error);
        }
    }

    async getMessages() {
        try {
            let messages = await GET("posts");
            if (messages) {
                this.setState({ messages });
            }
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <ScrollView style={styles.mainContainer}>
                <View>
                    <Text style={styles.headerMessage}>You've just recived new messages:</Text>
                    {this.state.users.map((user, i) => {
                        let message = {};
                        this.state.messages.forEach(m => {
                            if (m.userId === user.id) {
                                message = m;
                            }
                        });
                        return (
                            <View key={i}>
                                <MessageRecord user={user} message={message} />
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
        );
    }
}
