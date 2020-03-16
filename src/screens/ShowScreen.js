import React, { useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
    const { data } = useContext(Context);
    const blogPost = data.find(blogPost => blogPost.id === navigation.getParam("id"));
    return <View>
        <Text>{blogPost.title}</Text>
        <Text>{blogPost.content}</Text>
    </View>
}

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => {
        return <TouchableOpacity onPress={() => {
            const id = navigation.getParam('id');
            navigation.navigate("Edit", {id: id})
        }}>
                 <Feather name="edit" style={styles.iconStyle} />
               </TouchableOpacity>
        }
    }

}


const styles = {
    iconStyle: {
        fontSize: 34 
    }
}
export default ShowScreen;

