import React, { createContext, useReducer } from 'react';
import { initalState, UserReducer } from '../reducer/Reducer';

export const UserContext = createContext();

export default ({children}) => {
    
    const [state, dispatch] = useReducer(UserReducer, initalState);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
}