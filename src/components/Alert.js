import React, { useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext'

export const Alert = () => {

    const { alert, hideAlert } = useContext(AlertContext);

    return alert.visible ? (
        <div>
            <div className={`alert alert-${alert.type || 'danger'}`} role="alert">
                {alert.type==='success' ? 'Note was successfully created!' : 
                 alert.type==='warning' ? 'Please, enter the note!' :
                 'Something went wrong, try again!'}
                
                <button onClick={ () => hideAlert() } className="close-alert-btn">
                    &times;
                </button>
            </div>
        </div>) : null
}
