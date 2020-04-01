import React, { useContext, useEffect } from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";


const IndexScreen = ({navigation}) => {
  const {data, deleteBlog, getBlogs } = useContext(Context)
  useEffect(() => {
    getBlogs();
    
    const listener = navigation.addListener('didFocus', () => {
      getBlogs()

    });
    return () => {
      listener.remove();
    }
    }, []);

  console.log(data);

  return (
      <>
        <FlatList
          keyExtractor={blog => blog.title}
          data={data}
          renderItem={ ({ item }) => {
            return (
              <View style
              ={styles.titleStyle}>
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
      headerRight: () => {
      return <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <EvilIcons name="plus" style={styles.plusIconView} />
      </TouchableOpacity>
  }};
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
