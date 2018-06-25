import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { styles } from '../styles/styles';
import avatar_1 from '../images/1.png';
import avatar_2 from '../images/2.png';
import avatar_3 from '../images/3.png';
import avatar_4 from '../images/4.png';
import avatar_5 from '../images/5.png';
import avatar_6 from '../images/6.png';
import avatar_7 from '../images/7.png';
import avatar_8 from '../images/8.png';
import avatar_9 from '../images/9.png';
import avatar_10 from '../images/10.png';
import avatar_unknown from '../images/unknown.png';


export default class MailComponent extends Component {
    constructor(props) {
        super(props);
        this.avatar = avatar_unknown;
        this.getAvatar = this.getAvatar.bind(this);
    }

    getAvatar() {
        const emailAddr = this.props.email.address;
        switch(emailAddr) {
            case "vasiliy.pupkin@gmail.com":
                avatar = avatar_1;
                console.log("vasiliy.pupkin@gmail.com");
                break;
            case "vetaliy.lapot@gmail.com":
                avatar = avatar_2;
                break;
            case "lena.golovach@gmail.com":
                avatar = avatar_3;
                break;
            case "vasilisa.prekrasnaya@gmail.com":
                avatar = avatar_4;
                break;
            case "marfa.vasilievna@gmail.com":
                avatar = avatar_5;
                break;
            case "ivan.vasilievich@gmail.com":
                avatar = avatar_6;
                break;
            case "iliya.popov@gmail.com":
                avatar = avatar_7;
                break;
            case "nikolay.petrovich@gmail.com":
                avatar = avatar_8;
                break;
            case "nadegda.konstantinovna@gmail.com":
                avatar = avatar_9;
                break;
            case "mihail.batkovich@gmail.com":
                avatar = avatar_10;
                break;
            default:
                avatar = avatar_unknown;
                break;
        }
        return avatar;
    }

    render() {
        return (
            <View style={styles.mailComponentStyleSheet}>
                <Image source={this.getAvatar()} style={{width: 65, height:65}}/>
                <View style={{padding: 5}}>
                    <Text style={styles.mailAddressTextStyle}>From: {this.props.email.address}</Text>
                    <Text style={styles.mailTextStyle}>Subject: {this.props.email.subject}</Text>
                    <Text style={styles.mailTextStyle}>Message: {this.props.email.message}</Text>    
                </View>
            </View>
        )
    }
}