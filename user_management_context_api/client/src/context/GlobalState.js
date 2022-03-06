import React, { createContext, useReducer } from 'react';
import AppReducer from "./AppReducer"

// Initial State
const initialState = {
  users: []
}

// Create Context
export const GlobalContext = createContext(initialState);


// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const removeUser = (id) => {
    dispatch({
      type: 'REMOVE_USER',
      payload: id
    })
  }

  const addUser = (user) => {
    dispatch({
      type: 'ADD_USER',
      payload: user
    })
  }

  const editUser = (user) => {
    dispatch({
      type: 'EDIT_USER',
      payload: user
    })
  }

  return (
    //Global Provider will be wrapped either on index.js or app.js//
    <GlobalContext.Provider value={{
      users: state.users,
      removeUser,
      addUser,
      editUser
    }}>
      {children}
    </GlobalContext.Provider>
  )
}