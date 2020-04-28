import React, { useReducer } from 'react';
import { alertReducer } from './alertReducer'

//initial state
const initialState = {
    type: 'success',
    visible: false
}

// create context
export const AlertContext = React.createContext()

// context provider
export const AlertProvider = ({children}) => {

    const [state, dispatch] = useReducer(alertReducer, initialState);
    // eslint-disable-next-line
    const alertType = state.type;

    const hideAlert = () => {
        dispatch({
            type: 'HIDE_ALERT'
        })
    }

    const showAlert = alertType => {
        dispatch({
            type: 'SHOW_ALERT',
            payload: alertType
        })
    }
    
    return (
        <AlertContext.Provider value={
            {
                hideAlert, 
                showAlert, 
                alert: state
            }
        }>
            {children}
        </AlertContext.Provider>
    )
}
