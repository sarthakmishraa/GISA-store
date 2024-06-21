import { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { Formik } from "formik";
import { globalStyles } from "../styles/global";
import { z } from "zod";
import { FlatButton } from "../components/Button";

export const ProductForm = (props) => {
    const [validationErrors, setValidationErrors] = useState({});

    const productSchema = z.object({
        title: z.string().min(4, { message: "Must be atleast 4 characters long" }),
        body: z.string().min(8, { message: "Must be atleast 8 characters long" }),
        price: z.string().refine((data) => parseInt(data) > 0, { message: "Price should be a positive number" }),
        rating: z.string().refine((data) => parseInt(data) > 0 && parseInt(data) < 6, { message: "Rating should be between 1-5" })
    }).required();

    return(
        <View style={globalStyles.container} >
            <Formik
                initialValues={{ title: "", body: "", price: "", rating: "" }}
                onSubmit={(values, actions) => {
                    try {
                        productSchema.parse(values);
                        actions.resetForm();
                        props.addProduct(values);
                    }
                    catch (error) {
                        if (error instanceof z.ZodError) {
                            const fieldErrors = {};
                            error.errors.forEach((err) => {
                                fieldErrors[err.path[0]] = err.message;
                            });
                            setValidationErrors(fieldErrors);
                        }
                    }
                }}
            >
                {(props) => (
                    <View>
                        <Text style={styles.heading}>Add a new product</Text>
                        <TextInput
                          style={globalStyles.input}
                            placeholder="Product Name"
                            onChangeText={props.handleChange("title")}
                            value={props.values.title}
                            onBlur={props.handleBlur("title")}
                        />
                        <Text style={globalStyles.errorText} >{ validationErrors.title }</Text>

                        <TextInput
                            style={globalStyles.input}
                            placeholder="Product Description"
                            onChangeText={props.handleChange("body")}
                            value={props.values.body}
                            onBlur={props.handleBlur("body")}
                            multiline minHeight={60}
                        />
                        <Text style={globalStyles.errorText} >{ validationErrors.body }</Text>

                        <TextInput
                            style={globalStyles.input}
                            placeholder="Price"
                            onChangeText={props.handleChange("price")}
                            value={props.values.price}
                            keyboardType="numeric"
                            onBlur={props.handleBlur("price")}
                        />
                        <Text style={globalStyles.errorText} >{ validationErrors.price }</Text>

                        <TextInput
                            style={globalStyles.input}
                            placeholder="Rating (1-5)"
                            onChangeText={props.handleChange("rating")}
                            value={props.values.rating}
                            keyboardType="numeric"
                            onBlur={props.handleBlur("rating")}
                        />
                        <Text style={globalStyles.errorText} >{ validationErrors.rating }</Text>
                        
                        <FlatButton
                            text="Submit"
                            onPress={props.handleSubmit}
                        />
                    </View>
                )}
            </Formik>
        </View>
    )
};

const styles = StyleSheet.create({
    heading: {
        textAlign: "center",
        fontWeight: "semibold",
        marginTop: 10,
        marginBottom: 20,
        fontSize: 30,
        borderBottomColor: "lightblue",
        borderBottomWidth: 2
    }
});