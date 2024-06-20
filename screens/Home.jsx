import { useState } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from "react-native";
import { globalStyles } from "../styles/global";
import { Card } from "../components/Card";
import { MaterialIcons } from "@expo/vector-icons";
import { ProductForm } from "./ProductForm";

export const Home = ({ navigation }) => {
    const temp = [
        { prodId: 4, title: "HP Monitor", body: "24 inch monitor", price: "$60", rating: 3 },
        { prodId: 5, title: "Dell Keyboard", body: "Mechanical keyboard", price: "$80", rating: 2 },
        { prodId: 6, title: "Logitech Mouse", body: "Wireless mouse", price: "$40", rating: 4 },
        { prodId: 7, title: "Samsung SSD", body: "1TB solid state drive", price: "$150", rating: 5 },
        { prodId: 8, title: "Apple AirPods", body: "Bluetooth earbuds", price: "$200", rating: 3 }
    ];

    const [products, setProducts] = useState(temp);
    const [modalOpen, setModalOpen] = useState(false);

    const addProduct = (product) => {
        product.prodId = Math.random().toString();
        setProducts((prevProducts) => [product, ...prevProducts]);
        setModalOpen(false);
    }

    return(
        <View style={globalStyles.container} >
            <Modal visible={modalOpen} animationType="slide" >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <View style={styles.modalContent}>
                        <MaterialIcons
                            name="close"
                            size={24}
                            onPress={() => setModalOpen(false)}
                            style={styles.modalToggle}
                        />
                        <ProductForm addProduct={addProduct} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons
                name="add"
                size={24}
                onPress={() => setModalOpen(true)}
                style={styles.modalToggle}
            />

            <FlatList
                data={products}
                keyExtractor={(product) => product.prodId}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate("Product Details", item)} >
                        <Card>
                            <Text style={globalStyles.titleText} >{ item.title }</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    modalToggle: {
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "lightblue",
        padding: 10,
        borderRadius: 10,
        alignSelf: "center",
    },
    modalContent: {
        flex: 1
    }
});