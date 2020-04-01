import React, { createContext } from "react";
import createDataContext from "./createDataContext";
import jsonServer from "../api/JsonServer";


const handleBlogPosts = (state, action) => {
  switch(action.type){
    case 'get_blogs':
      return action.payload;
    case "delete_blog":
      return state.filter(elem => elem.id !== action.id);
    case "edit_blog":
      const data = state.filter(blog => blog.id !== action.payload.id);
      return [...data, action.payload];
    default:
      return state;
  }
}

const getBlogs = dispatch => {
  return async () => {
    console.log("getblogggggs");
    const blogs = await jsonServer.get("/blogposts");
    dispatch({type: "get_blogs", payload: blogs.data})
  }
}


const addBlogs = dispatch => {
  return async (title, content, callback) => {
    await jsonServer.post("/blogposts", {title, content});
    if(callback){
      callback();
    }
  }
}

const deleteBlog = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`)
    dispatch({type: "delete_blog", id: id});
  }
}


const editBlog = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, {title, content})
    dispatch({type: "edit_blog", payload: {id, title, content} });
    if(callback){
      callback()
    }
  }
}
export const {Context, Provider } = createDataContext(handleBlogPosts, 
                                                      {addBlogs, deleteBlog, 
                                                       editBlog, getBlogs}, []);
