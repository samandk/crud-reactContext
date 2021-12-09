import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//InitialState
const initialState ={
    users:[
        {id:1, name:'user One'},
        {id:2, name: 'user Two'}
    ]
}

//Create Context
export const GlobalContext = createContext(initialState);

//Provider Component
 const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer,initialState);
    //Actions
    const removeUser = (id) =>{
        dispatch({
            type:'REMOVE_USER',
            payload:id
        })
    }
    const addUser = (user) =>{
        dispatch({
            type:'ADD_USER',
            payload:user
        })
    }
    const editUser = (user) =>{
        dispatch({
            type:'EDIT_USER',
            payload:user
        })
    }
    return(
        <GlobalContext.Provider value={{
            users:state.users,
            removeUser,
            addUser,
            editUser
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalProvider;