import React, { useContext } from "react";
import { Text, View } from "react-native";
import { Context } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
    const { data } = useContext(Context);
    const blogPost = data.find(blogPost => blogPost.id === navigation.getParam("id"));
    return <View>
        <Text>{blogPost.title}</Text>
        <Text>{blogPost.content}</Text>
    </View>
}


export default ShowScreen;

