import React, { useContext, useState } from "react";
import { Text, TextInput, View, Button } from "react-native";
import { Context } from "../context/BlogContext";



const CreateBlogScreen = () => {
    const { addBlogs } = useContext(Context);
    const [ title, setTtitle ] = useState("");
    const [ content, setContent ] = useState("");

    const addNewBlog = () => {
        addBlogs(title, content);
    }
    return <View style={styles.viewStyle}>

        <Text style={styles.titleStyle}>Enter Title</Text>
        <TextInput style={styles.textInputStyle} 
                   value={title}
                   onChangeText={(text) => setTtitle(text)} />

        <Text styles={styles.titleStyle}>Enter Content</Text>
        <TextInput style={styles.textInputStyle} 
                   value={content}
                   onChangeText={(text) => setContent(text)} />

        <Button title="Create blog" 
                onPress={() => addNewBlog()} />
    </View>
}


const styles = {
    viewStyle: {
        justifyContent: "space-between",
        padding: 10
    },
    textInputStyle: {
        borderWidth: 1,
        marginBottom: 10
    },
    buttonStyle: {
        borderRadius: 10
    },
	titleStyle: {

	}
}
export default CreateBlogScreen;
