import React,{createContext,useContext,useReducer} from "react";
export const StateContext=createContext();// StateContext is the object with elements Provider and Consumer

export const StateProvider=({reducer,initialState,children})=>{
   // const [state,dispatch]=useReducer(reducer,initialState)
   //reducer fn take the initialstate and update it corresponding to dispatch action (add to cart,remove,...)
    return(
        //value={{...state,addToCart}} just to understand see thapa technical video
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        
        {children}
   </StateContext.Provider>
    )
}; // use this index.jsx to wrap App component

export const useStateValue=()=>useContext(StateContext);//Consumer to consume the provided value //now you can use this value anywhere on your webpage