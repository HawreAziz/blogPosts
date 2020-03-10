import React from "react";


export default (reducer, actions, initialState) => {
    const Context = React.createContext();

    const Provider = ({children}) => {
        const [state, dispatch] = React.useReducer(reducer, initialState);
        return <Context.Provider value={{ data: state, addBlogs: actions.addBlogs(dispatch), 
                                          deleteBlog: actions.deleteBlog(dispatch)}}>
                   {children}
               </Context.Provider>
    }

    return { Context, Provider }
};