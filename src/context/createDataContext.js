import React from "react";


export default (reducer, actions, initialState) => {
    const Context = React.createContext();

    const Provider = ({children}) => {
        const [state, dispatch] = React.useReducer(reducer, initialState);
        const boundActions = {};
        for(let key in actions){
            console.log(key);
            boundActions[key] = actions[key](dispatch);
        }
        console.log(boundActions)
        return <Context.Provider value={{ data: state, ...boundActions}}>
                   {children}   
               </Context.Provider>
    }

    return { Context, Provider }
};