import React, { useContext } from "react";
import { Context } from "../context/BlogContext"
import FormComponent from "../components/FormComponent";


const EditScreen = ({ navigation }) => {
    const { data, editBlog } = useContext(Context);
    const blogPost = data.find(blog => blog.id === navigation.getParam('id'));

    return <FormComponent handleBlog={(title, content) => {
        editBlog(navigation.getParam("id"), title, content, () => navigation.pop()); }}
        initialValue={{ title: blogPost.title, content: blogPost.content }} ButtonText="Update" />
}

export default EditScreen;