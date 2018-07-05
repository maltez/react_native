import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    textTitle: {
        fontSize: 20,
    },
    textHolder: {
        marginBottom: 5,
        borderBottomWidth: 1,
        borderStyle: 'dashed',
        borderBottomColor: 'grey',
    },
    container: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
    },
    textContainer: {
        flexDirection: 'column',
        marginLeft: 15,
    },
    textDescription: {
        fontSize: 14,
        borderColor: 'grey',
        alignItems: 'stretch',
        marginTop: 5,
        justifyContent: 'space-between',
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
});