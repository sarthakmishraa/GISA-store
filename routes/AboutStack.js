import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { About } from "../screens/About";
import { Header } from "../components/Header";

const Stack = createNativeStackNavigator();

export const AboutStack = ({ navigation }) => {
    return(
    <Stack.Navigator
        screenOptions={{
            headerTitle: () => <Header navigation={navigation} title="About | GISA Store" />,
            headerStyle: styles.homeHeaderStyle,
            headerTintColor: "#444"
        }}
    >
        
        <Stack.Screen
            name="About"
            component={About}
        />
        
    </Stack.Navigator>
    )
};

const styles = StyleSheet.create({
    homeHeaderStyle: {
        backgroundColor: "lightblue",
    }
});