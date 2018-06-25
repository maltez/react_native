import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import MailComponent from './components/MailComponent';
import { styles } from './styles/styles';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.messages = [
      {address: "vasiliy.pupkin@gmail.com",         subject: "Layout with Flexbox", message: "A component can specify the layout of its children using the flexbox algorithm"},
      {address: "vetaliy.lapot@gmail.com",          subject: "Style",               message: "With React Native, you don't use a special language or syntax for defining styles"},
      {address: "lena.golovach@gmail.com",          subject: "Props",               message: "Most components can be customized when they are created, with different parameters."},
      {address: "vasilisa.prekrasnaya@gmail.com",   subject: "Debugging",           message: "React Native supports a few keyboard shortcuts in the iOS Simulator. They are described below."},
      {address: "marfa.vasilievna@gmail.com",       subject: "Networking",          message: "Many mobile apps need to load resources from a remote URL. You may want to make a POST request to a REST API"},
      {address: "ivan.vasilievich@gmail.com",       subject: "WebSocket Support",   message: "React Native also supports WebSockets, a protocol which provides full-duplex communication "},
      {address: "iliya.popov@gmail.com",            subject: "High Five!",          message: "If you've gotten here by reading linearly through the tutorial, then you are a pretty impressive human being. Congratulations."},
      {address: "nikolay.petrovich@gmail.com",      subject: "Images",              message: "React Native provides a unified way of managing images and other media assets in your iOS and Android apps."},
      {address: "nadegda.konstantinovna@gmail.com", subject: "Handling Text Input", message: "TextInput is a basic component that allows the user to enter text. It has an onChangeText prop "},
      {address: "mihail.batkovich@gmail.com",       subject: "Animations",          message: "TAnimations are very important to create a great user experience. Stationary objects must overcome inertia as they start moving."},
      {address: "asdfasdf.asdfasf@mail.ru",         subject: "Components and APIs", message: "React Native provides a number of built-in components. You will find a full list of components and APIs on the sidebar to the left."},
      {address: "ghghi.bxcnbmbn@fghnnbn.ru",        subject: "111mncjfb djf",       message: "nfcafjchdlflfdscnhnj fjdchdsjca dfjcfnsajf"}
    ];
    this.state = { randomMessages: [0,1,2,3,4,5,6,7,8] };
  }

  generateRandomEmails() {
    let list=[];
    for(let i = 0; i < this.messages.length; i++) {
      list.push(Math.floor(Math.random() * this.messages.length));
    }
    return { randomMessages: list };
  }

  receiveMail = function() {
    this.setState(this.generateRandomEmails());
  }.bind(this);

  render() {
    return (
      <View style={{borderTopWidth: 40}}>
        <Text style={styles.mailboxTtitle}>Mail List</Text>
        <MailComponent email={this.messages[this.state.randomMessages[0]]}/>
        <MailComponent email={this.messages[this.state.randomMessages[1]]}/>
        <MailComponent email={this.messages[this.state.randomMessages[2]]}/>
        <MailComponent email={this.messages[this.state.randomMessages[3]]}/>
        <MailComponent email={this.messages[this.state.randomMessages[4]]}/>
        <MailComponent email={this.messages[this.state.randomMessages[5]]}/>
        <MailComponent email={this.messages[this.state.randomMessages[6]]}/>
        <MailComponent email={this.messages[this.state.randomMessages[7]]}/>
        <MailComponent email={this.messages[this.state.randomMessages[8]]}/>
        <TouchableOpacity
            style={styles.receiveMailButtonStyle}
            onPress={() => this.receiveMail()}>
            <Text style={styles.receiveMailButtonTextStyle}>Receive Mail</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


