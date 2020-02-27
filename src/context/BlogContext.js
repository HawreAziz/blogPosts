import React, { createContext, useReducer } from "react";


const BlogContext = createContext();

const handleBlogPosts = (state, action) => {
    switch(action.type){
        case "add_blog":
          return [...state, action.payload];
        default:
          return state;
    }
}

export const BlogProvider = ({ children }) => {
    const [ blogP, dispatch ] = useReducer(handleBlogPosts, []);


    const addBlogs = () => {
        dispatch({type: "add_blog", payload: {title: `Blog Post #${blogP.length + 1 }`,
                                                 id: Math.random()* 100 } });
    }
    
    return <BlogContext.Provider value={{ data: blogP, addBlogs: addBlogs}} >
             { children }
           </BlogContext.Provider>

}
export default BlogContext;