import React, { useContext } from "react";
import { Context } from "../context/BlogContext"
import FormComponent from "../components/FormComponent";


const EditScreen = ({ navigation }) => {
    const { editBlog } = useContext(Context);

    return <FormComponent handleBlog={(title, content) => {
        editBlog(navigation.getParam("id"), title, content, () => navigation.navigate("Blog")); }} />
}

export default EditScreen;