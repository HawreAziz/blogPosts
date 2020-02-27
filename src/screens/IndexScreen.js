import React, { useContext, useReducer } from "react";
import { Text, View, FlatList, Button, Image } from "react-native";
import BlogContext from "../context/BlogContext"; 


const IndexScreen = () => {
  const {data, addBlogs } = useContext(BlogContext)
  return (
      <>
        <Text>IndexScreen</Text>
        <Button title="Add Blog Post" onPress={addBlogs} />
        <FlatList
          keyExtractor={blog => blog.title}
          data={data}
          renderItem={ ({ item }) => {
            return <Text>{item.title}</Text>
          }}
        />
      </>
  );
}


export default IndexScreen;