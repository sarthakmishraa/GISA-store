import { StyleSheet, View, Text, Image } from "react-native";
import { globalStyles, images } from "../styles/global";
import { Card } from "../components/Card";
import { FlatButton } from "../components/Button";

export const ProductDetails = ({ navigation, route }) => {
    const pressHandler = () => {
        navigation.goBack();
    };

    const rating = route.params.rating;

    return(
        <View style={globalStyles.container} >
            <FlatButton text="go back" onPress={pressHandler} />
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