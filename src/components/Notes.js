import React, {useContext, useEffect} from 'react';
import { MinutesAgo } from './MinutesAgo';
import { FirebaseContext } from '../context/firebase/FirebaseContext'

export const Notes = () => {

    const { fetchNotes, notes, deleteNote } = useContext(FirebaseContext);

    useEffect(() => {
        fetchNotes()
        // eslint-disable-next-line
    }, [])

    return (
        <ul className="list-group mt-5 mr-5">
            {notes.length ? notes.map((note) => (
                <li className="list-group-item d-flex justify-content-between align-items-center note"
                    key = {note.id}   >
                    {note.text}
                    <div>
                        <MinutesAgo note={note}/>
                        <button type="button" onClick={() => deleteNote(note.identificator)} className="btn btn-outline-danger ml-2 delete-btn">&times;</button>
                    </div>
                </li>)
            ) : (<div>No notes yet</div>)}

        </ul>
    )
}

