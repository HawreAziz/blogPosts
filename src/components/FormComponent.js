import React, { useState } from "react";
import { Text, TextInput, View, Button } from "react-native";


const FormComponent = ({ handleBlog }) => {
    const [ title, setTtitle ] = useState("");
    const [ content, setContent ] = useState("");
    return <View style={styles.viewStyle}>

              <Text style={styles.titleStyle}>Enter Title</Text>
              <TextInput style={styles.textInputStyle} 
                  value={title}
                  onChangeText={(text) => setTtitle(text)} />

              <Text styles={styles.titleStyle}>Enter Content</Text>
              <TextInput style={styles.textInputStyle} 
                value={content}
                onChangeText={(text) => setContent(text)} />

              <Button title="Create blog" onPress={() => handleBlog(title, content)} />
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
    }
}

export default FormComponent;