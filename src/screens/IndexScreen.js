import React, { useContext, useReducer } from "react";
import { Text, View, FlatList, Button, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext"; 
import { EvilIcons } from "@expo/vector-icons";


const IndexScreen = ({navigation}) => {
  const {data, addBlogs, deleteBlog } = useContext(Context)

  return (
      <>
        <Text>IndexScreen</Text>
        <Button title="Add Blog Post" onPress={addBlogs} />
        <FlatList
          keyExtractor={blog => blog.title}
          data={data}
          renderItem={ ({ item }) => {
            return (
              <View style={styles.titleStyle}>
                  <Text style={styles.textStyle} 
                        key={item.id}
                        onPress={() => navigation.navigate("Show", {id: item.id})} >
                        {item.title} - {item.id}
                  </Text>
                  <TouchableOpacity onPress={() => deleteBlog(item.id) } >
                    <EvilIcons name="trash" style={styles.iconStyles} />
                  </TouchableOpacity>
              </View>
            )
          }}
        />
      </>
  );
}

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
      headerRight: <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                     <EvilIcons name="plus" style={styles.plusIconView} />
                   </TouchableOpacity>
  };
};

const styles = {
  titleStyle: {
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    marginVertical: 5
  },
  textStyle: {
    fontSize: 18,
  },
  iconStyles: {
    fontSize: 30,
  },
  plusIconView : {
    fontSize: 34,
    alignSelf: "center"
  }
}

export default IndexScreen;