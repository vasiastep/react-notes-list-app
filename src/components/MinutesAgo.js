import React from 'react';

export const MinutesAgo = ({note}) => {

    return (
        <div style={{display:'inline-block'}}>
            <span className="badge badge-primary badge-pill">{`
                Created on 
                ${new Date(note.id).toLocaleString()}`}
            </span>
        </div>
    )
}
