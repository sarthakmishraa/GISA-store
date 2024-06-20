import { View, TextInput, Button } from "react-native";
import { Formik } from "formik";
import { globalStyles } from "../styles/global";

export const ProductForm = (props) => {
    return(
        <View style={globalStyles.container} >
            <Formik
                initialValues={{ title: "", body: "", price: "", rating: "" }}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    props.addProduct(values);
                }}
            >
                {(props) => (
                    <View>
                        <TextInput
                          style={globalStyles.input}
                            placeholder="Product Name"
                            onChangeText={props.handleChange("title")}
                            value={props.values.title}
                        />

                        <TextInput
                            style={globalStyles.input}
                            placeholder="Product Description"
                            onChangeText={props.handleChange("body")}
                            value={props.values.body}
                        />

                        <TextInput
                            style={globalStyles.input}
                            placeholder="Price"
                            onChangeText={props.handleChange("price")}
                            value={props.values.price}
                            keyboardType="numeric"
                        />

                        <TextInput
                            style={globalStyles.input}
                            placeholder="Rating (1-5)"
                            onChangeText={props.handleChange("rating")}
                            value={props.values.rating}
                            keyboardType="numeric"
                        />
                        
                        <Button
                            title="Submit"
                            color="lightblue"
                            onPress={props.handleSubmit}
                        />
                    </View>
                )}
            </Formik>
        </View>
    )
};