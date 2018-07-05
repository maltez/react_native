import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
       backgroundColor: '#fff',
       alignItems: 'center',
       justifyContent: 'center',
    },
    mailboxTtitle: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign:'center'
    },
    receiveMailButtonStyle: {
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'blue',
        borderRadius:10,
        borderWidth: 2,
        borderColor: 'red'
    },
    receiveMailButtonTextStyle: {
        color:'#fff',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10,
        fontSize: 20
    },
    mailTextStyle: {
        color:'black',
        fontSize: 11
    },
    mailAddressTextStyle: {
        color:'black',
        fontSize: 12,
        fontWeight: 'bold'
    },
    mailComponentStyleSheet: {
        flexDirection: "row", 
        height: 72
    }
  });
