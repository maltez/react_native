import { StyleSheet } from "react-native";
import { Constants } from "expo";

const styles = {
    mainContainer: {
        flex: 1,
        backgroundColor: "skyblue",
        paddingTop: Constants.statusBarHeight
    },
    messageContainer: {
        flex: 1,
        flexDirection: "row",
        paddingTop: 5,
        paddingBottom: 5,
        marginStart: 5,
        marginTop: 5,
        borderRadius: 4,
        borderWidth: 0.7,
        borderColor: "steelblue"
    },
    headerMessage: {
        backgroundColor: "steelblue",
        color: "white",
        paddingStart: 5
    },
    avatarContainer: {
        paddingStart: 5
    },
    avatar: {
        width: 65,
        height: 65
    },
    messageDetail: {
        marginStart: 10
    }
};

export default styles;
