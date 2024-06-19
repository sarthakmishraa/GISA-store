import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { ProductDetails } from "../screens/ProductDetails";
import { Header } from "../components/Header";

const Stack = createNativeStackNavigator();

export const HomeStack = ({ navigation }) => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerTitle: () => <Header navigation={ navigation } title="GISA Store" />,
                headerStyle: styles.homeHeaderStyle,
                headerTintColor: "#444"
            }}
        >
            
            <Stack.Screen
                name="GISA Store"
                component={Home}
            />
            
            <Stack.Screen
                name="Product Details"
                component={ProductDetails}
            />
        
        </Stack.Navigator>
    )
};

const styles = StyleSheet.create({
    homeHeaderStyle: {
        backgroundColor: "lightblue",
    }
});