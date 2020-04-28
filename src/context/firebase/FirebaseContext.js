import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import {FirebaseReducer} from './FirebaseReducer';

// DB URL
const url = 'https://react-notes-f5b8f.firebaseio.com';

// create context
export const FirebaseContext = createContext();

// initial state
export const FirebaseProvider = ({children}) => {
    const initialState = {
        notes: []
    }

    const [state, dispatch] = useReducer(FirebaseReducer, initialState);

    const fetchNotes = async () => {
        const res = await axios.get(`${url}/notes.json`);

        const payload = Object.keys(res.data || []).map(key => {
            return {
                ...res.data[key],
                identificator: key
            }
        })

        console.log( payload )

        await dispatch({type: 'FETCH_NOTES', payload})
    }

    const addNote = async (text) => {
        const note = {
            text, id: Date.now()
        }

        const res = await axios.post(`${url}/notes.json`, note)
        
        dispatch({type: 'ADD_NOTE', payload: {...note, identificator: res.data.name}})
    }

    const deleteNote = async (id) => {

        await axios.delete(`${url}/notes/${id}.json`)

        dispatch({type: 'DELETE_NOTE', payload: id})
    }

    return (
        <FirebaseContext.Provider value={{
            fetchNotes, addNote, deleteNote, 
            notes: state.notes
        }}>
            {children}
        </FirebaseContext.Provider>
    )
}