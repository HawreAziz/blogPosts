import React, { useContext } from "react";
import { Text, View, FlatList, Button } from "react-native";
import BlogContext from "../context/BlogContext"; 

const IndexScreen = () => {
  const {data, addBlogPosts } = useContext(BlogContext)
  return (
      <>
        <Text>IndexScreen</Text>
        <Button title="Add Blog Post" onPress={addBlogPosts} />
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