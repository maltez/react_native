import { StyleSheet } from "react-native";
import { Constants } from "expo";

const styles = {
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: Constants.statusBarHeight
    },
    row: {
        flex: 1,
        flexDirection: "row"
    },
    cell: {
        flex: 1,
        backgroundColor: "green",
        borderWidth: 2,
        borderColor: "steelblue"
    },
    button: {
        width: "100%",
        borderWidth: 2
    },
    arrayStyles: [
        {
            cellElements: {
                flex: 1,
                flexDirection: "row"
            },
            element1: {
                flex: 1,
                backgroundColor: "powderblue"
            },
            element2: {
                flex: 1,
                backgroundColor: "skyblue"
            },
            element3: {
                flex: 1,
                backgroundColor: "steelblue"
            }
        },
        {
            cellElements: {
                flex: 1,
                flexDirection: "column"
            },
            element1: {
                flex: 1,
                backgroundColor: "white"
            },
            element2: {
                flex: 1,
                backgroundColor: "gray"
            },
            element3: {
                flex: 1,
                backgroundColor: "black"
            }
        },
        {
            cellElements: {
                flex: 1,
                flexDirection: "row"
            },
            element1: {
                flex: 1,
                backgroundColor: "yellow"
            },
            element2: {
                flex: 1,
                backgroundColor: "orange"
            },
            element3: {
                flex: 1,
                backgroundColor: "red"
            }
        },
        {
            cellElements: {
                flex: 1,
                flexDirection: "column"
            },
            element1: {
                flex: 1,
                backgroundColor: "red"
            },
            element2: {
                flex: 1,
                backgroundColor: "white"
            },
            element3: {
                flex: 1,
                backgroundColor: "blue"
            }
        },

    ]
};

export default styles;
