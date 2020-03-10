import React, { createContext, useReducer } from "react";
import createDataContext from "./createDataContext";


const handleBlogPosts = (state, action) => {
    switch(action.type){
        case "add_blog":
          return [...state, { id: Math.floor(Math.random() * 99999),
                              title: `Blog post #${state.length + 1}`} ];
        case "delete_blog":
          return state.filter(elem => elem.id !== action.id);
        default:
          return state;
    }
}

const addBlogs = dispatch => {
  return () => {
        dispatch({type: "add_blog" });
  }
}

const deleteBlog = (dispatch, entry) => {
  return (id) => {
        dispatch({type: "delete_blog", id: id});
  }
}
export const {Context, Provider } = createDataContext(handleBlogPosts, {addBlogs, deleteBlog}, []);