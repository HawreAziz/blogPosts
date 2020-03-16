import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateBlogScreen from "./src/screens/CreateBlogScreen";
import EditScreen from "./src/screens/EditScreen";
import { Provider } from "./src/context/BlogContext";



const navigator = createStackNavigator(
  {
    Blog: IndexScreen,
    Show: ShowScreen,
    Create: CreateBlogScreen,
    Edit: EditScreen,
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
  return <Provider>
           <App />
         </Provider>
};