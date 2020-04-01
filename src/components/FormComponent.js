import React, { useState } from "react";
import { Text, TextInput, View, Button } from "react-native";


const FormComponent = ({ handleBlog, initialValue, ButtonText }) => {
    const [ title, setTtitle ] = useState(initialValue.title);
    const [ content, setContent ] = useState(initialValue.content);
    return <View style={styles.viewStyle}>

              <Text style={styles.titleStyle}>Enter Title</Text>
              <TextInput style={styles.textInputStyle} 
                  value={title}
                  onChangeText={(text) => setTtitle(text)} />

              <Text styles={styles.titleStyle}>Enter Content</Text>
              <TextInput style={styles.textInputStyle} 
                value={content}
                onChangeText={(text) => setContent(text)} />

              <Button title={ButtonText} onPress={() => handleBlog(title, content)} />
           </View>
}

FormComponent.defaultProps = {
    initialValue: {
        title: '',
        content: ''
    }
};

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