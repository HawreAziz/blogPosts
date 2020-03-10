import React, { useContext } from "react";
import { Text, View } from "react-native";
import { Context } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
    const { data } = useContext(Context);
    const blogPost = data.find(blogPost => blogPost.id === navigation.getParam("id"));
    return <View>
        <Text>{blogPost.title} - {blogPost.id}</Text>
    </View>
}


export default ShowScreen;

