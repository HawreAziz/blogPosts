import React, { createContext, useState  } from "react";


const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const [ blogPosts, setBlogPosts ] = useState([]);

    const addBlogPosts = () => {
        setBlogPosts([ ...blogPosts, { title: `Blog Post #${blogPosts.length + 1 }`} ]);
    }
    
    const deleteBlog = (blog) => {
        const blogIndex = blogPosts.indexOf(blog);
        blogs.splice(blogIndex, 1);
        setBlogPosts(blogs);
    }

    return <BlogContext.Provider value={{ data: blogPosts, addBlogPosts: addBlogPosts}} >
             { children }
           </BlogContext.Provider>

}
export default BlogContext;