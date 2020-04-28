import React, {useState, useContext} from 'react';
import { AlertContext } from '../context/alert/alertContext'
import { FirebaseContext } from '../context/firebase/FirebaseContext'

export const Form = () => {
    let [value, setValue] = useState('');

    const { showAlert } = useContext(AlertContext);
    const { addNote } = useContext(FirebaseContext)

    const addNewNote = e => {
        e.preventDefault();
        addNote(value);
        showAlert('success');
        setValue('');
    }

    const showWarningAlert = e => {
        e.preventDefault();
        showAlert('warning');
    }

    return (
        <form onSubmit={value.trim() ? addNewNote : showWarningAlert}>
            <input 
                type="text" 
                className="form-control" 
                placeholder="Enter tip..."
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
        </form>
    )
}