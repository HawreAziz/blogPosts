import React, { useContext } from "react";
import { View } from "react-native";
import { Context } from "../context/BlogContext";
import FormComponent from "../components/FormComponent";



const CreateBlogScreen = ({ navigation }) => {
    const { addBlogs } = useContext(Context);
    return <View>
        <FormComponent handleBlog={(title, content) => {
            addBlogs(title, content, () => navigation.navigate("Blog"));
        }} />
    </View>
}

export default CreateBlogScreen;
