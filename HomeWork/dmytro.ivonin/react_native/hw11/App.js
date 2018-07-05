import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Message from './Components/Message/Message';

const emails = ['equius.zahhak@email.com', 'eridan.ampora@email.com', 'gamzee.makara@email.com',
                'kanaya.maryam@email.com', 'nepeta.leijon@email.com', 'sollux.captor@email.com',
                'tavros.nitram@email.com', 'terezi.pyrope@email.com', 'vriska.serket@email.com',
                'silen.miras@email.com', 'resote.freson@mail.com', 'tunabel.zaturwis@email.com'];

const titles = ['*Don\'t Open This Email*', 'The timer’s going off on your cart!', 'What Can You Afford?',
                'Google sees smartphone heroics in Oreo.', "Where to Drink Beer Right Now", 
                'Buffer has been hacked', "Everything you wanted to know about email copy", 
                "🐶 Want a Custom Emoji of Tullamore & 6 Months FREE Walks?", 
                "Abra-cord-abra! Yeah, we said it.", "[URGENT] You’ve got ONE DAY to watch this…",
                "Tonight only: A denim lover’s dream", "Licking your phone never tasted so good",
                "NEW! Vacation on Mars"];

const texts = [`Once you open up an email from BuzzFeed, the copy is equally awesome. Just take a look at that glorious alt text action happening where the images should be. The email still conveys what it is supposed to convey -- and looks great -- whether you use an image or not. That's definitely something to admire.`,
              `What makes an email exceptional? More specifically, what makes an event registration email stand out from the rest? This list of examples thoroughly breaks down the email marketing tactics that companies use to effectively supplement their overall event strategy.`,
              `The data shows that email will continue to play a very important role in the event organizer’s promotional strategy. According to the latest events industry benchmark report, 40% of marketers believe email marketing is the most effective channel for event promotion. `,
              `Taking this into account, this list was created to serve as a source of inspiration for your future campaigns. Given the diversity of examples, there will surely be something to take away from each.`,
              `In the context of event email marketing tactics, the goal of any email should be to capture the reader’s attention. `,
              `Thus, email design is an essential component to any email marketing campaign. `,
              `And this does not mean that the design must be intricate with high quality photos.`,
              `Most times it is best to adhere to basic, fundamental principles of good email design. `,
              `One of these core principles is maintaining a consistent color scheme.`,
              `As show in the above example for the Forecast Conference, going with the same color creates an appealing effect. `,
              `Keep in mind that a consistent color scheme does not mean using the same exact color throughout the email. `,
              `It is more aesthetically pleasing to display a consistent color spectrum so that the design does not come off as one-dimensional. `,
              `In this example, the purple to pink spectrum gives a unifying feel that brings an aesthetic harmony to the overall email.`,
            ];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Message text={getrandomText()} title={getRandomTitle()} sender={getRandomEmail()} from={getRandomEmail()}/>
        <Message text={getrandomText()} title={getRandomTitle()} sender={getRandomEmail()} from={getRandomEmail()}/>
        <Message text={getrandomText()} title={getRandomTitle()} sender={getRandomEmail()} from={getRandomEmail()}/>
        <Message text={getrandomText()} title={getRandomTitle()} sender={getRandomEmail()} from={getRandomEmail()}/>
        <Message text={getrandomText()} title={getRandomTitle()} sender={getRandomEmail()} from={getRandomEmail()}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection:'column',
    margin: 10,
    
  },
});

function getRandomEmail() {
  return emails[Math.floor(Math.random() * emails.length)];
}

function getRandomTitle() {
  return titles[Math.floor(Math.random() * titles.length)];
}

function getrandomText() {
  return texts[Math.floor(Math.random() * texts.length)];
}