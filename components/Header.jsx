import { StyleSheet, View, Text, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const Header = ({ navigation, title }) => {

    const pressHandler = () => {
        navigation.openDrawer()
    };

    return(
        <View style={styles.header}>
            <MaterialIcons name="menu" size={28} onPress={pressHandler} style={styles.icon} />
            <View style={styles.headerTitle}>
                <Text style={styles.headerText}>{ title } by </Text>
                <Image source={require("../assets/sm-logo.png")} style={styles.headerImage} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#333",
        letterSpacing: 1
    },
    icon: {
        position: "absolute",
        left: 16
    },
    headerTitle: {
        flexDirection: "row"
    },
    headerImage: {
        marginHorizontal: 5,
        width: 24,
        height: 24
    }
});