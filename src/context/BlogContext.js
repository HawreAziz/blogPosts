import React, { createContext } from "react";
import createDataContext from "./createDataContext";


const handleBlogPosts = (state, action) => {
    switch(action.type){
        case "add_blog":
          return [...state, { id: Math.floor(Math.random() * 99999),
                              title: `${action.title}#${state.length + 1}`,
					                    content: action.content} ];
        case "delete_blog":
          return state.filter(elem => elem.id !== action.id);
        case "edit_blog":
          const data = state.filter(blog => blog.id !== action.payload.id);
          return [...data, action.payload];
        default:
          return state;
    }
}

const addBlogs = dispatch => {
  return (title, content, callback) => {
        dispatch({type: "add_blog", title: title, content: content });
        callback();
  }
}

const deleteBlog = (dispatch) => {
  return (id) => {
        dispatch({type: "delete_blog", id: id});
  }
}


const editBlog = (dispatch) => {
  return (id, title, content, callback) => {
        dispatch({type: "edit_blog", payload: {id, title, content} });
        callback()
  }
}
export const {Context, Provider } = createDataContext(handleBlogPosts, {addBlogs, deleteBlog, editBlog}, []);
