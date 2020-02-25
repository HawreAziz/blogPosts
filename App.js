import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import { BlogProvider } from "./src/context/BlogContext";



const navigator = createStackNavigator(
  {
    Blog: IndexScreen 
  },
  {
    initialRouteName: "Blog",
    defaultNavigationOptions: {
      title: "Blog Post"
    }
  }
);


const App =  createAppContainer(navigator);

export default () => {
  return <BlogProvider>
           <App />
         </BlogProvider>
};