import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Contact from "./Contact/Contact"
import johnImage from "./john.png"
import bobImage from "./bob.png"
import unknownImage from "./unknown.png"

export default class App extends Component {
  render() {
    return (
      <View style={AppStyle.container}>
        <Text style={AppStyle.title}>Emails</Text>
        <Contact 
          email="John <john@gmail.com>" 
          image={johnImage} 
          subject="Behind The Scenes..." 
          text="New features to make your navigation, editing, and export better!" />
        <Contact 
          email="Bob <bob@dish.com>" 
          image={bobImage} 
          subject="Invitation" 
          text="Hey, why not use Sunday to decide on your next vacation?" />
        <Contact 
          email="Unknown <alex@me.com>" 
          image={unknownImage} subject="Reminder" 
          text="Please take some time to review and agree to the new unified Terms of Service and Privacy Policy by clicking on the button below." />
      </View>
    );
  }
}

const AppStyle = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 50},
  title: { fontSize: 24 }
});