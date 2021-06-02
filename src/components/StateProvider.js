//we need this to track the basket
//setup data layer
import React, { createContext , useContext, useReducer } from "react";
import reducer, {initialState} from './reducer';

//this is the data Layer
export const StateContext = createContext();


//BUILD a provider

export const StateProvider = ({children}) =>{

    const state = useReducer(reducer, initialState);
    return (
      <StateContext.Provider value={state}>
        {children}
      </StateContext.Provider>
    );
}
export const useStateValue = () => useContext(StateContext);