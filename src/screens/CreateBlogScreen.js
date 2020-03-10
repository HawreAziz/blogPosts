import React, { useContext } from "react";
import { Text, TextInput, View, Button } from "react-native";
import { Context } from "../context/BlogContext";



const CreateBlogScreen = () => {
    const { addBlogs } = useContext(Context);
    let title = "";
    let content = "";
    return <View>
        <Text>Enter Title</Text>
        <TextInput style={styles.textInputStyle} onTextChange={(text) => title=text} />
        <Text>Enter Content</Text>
        <TextInput style={styles.textInputStyle} onTextChange={(text) => contenxt=text} />
        <Button title="Create blog" onPress={() => console.log(title, content)} />
    </View>
}


const styles = {
    textInputStyle: {
        borderWidth: 1
    }
}
export default CreateBlogScreen;