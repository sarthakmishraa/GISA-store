import { StyleSheet, View, Text, Button, Image } from "react-native";
import { globalStyles, images } from "../styles/global";
import { Card } from "../components/Card";

export const ProductDetails = ({ navigation, route }) => {
    const pressHandler = () => {
        navigation.goBack();
    };

    const rating = route.params.rating;

    return(
        <View style={globalStyles.container} >
            <Button title="go back" onPress={pressHandler} />
            <Text>Product Details</Text>
            <Card>
                <Text>{ route.params.title }</Text>
                <Text>Price: { route.params.price }</Text>
                <Text>{ route.params.body }</Text>

                <View style={styles.rating}>
                    <Text>GISA Store rating:</Text>
                    <Image source={images.ratings[rating]} />
                </View>
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({
    rating: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: "#eee"
    }
});