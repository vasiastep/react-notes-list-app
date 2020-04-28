export const FirebaseReducer = ( state, action ) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return {
                ...state,
                notes: [...state.notes, action.payload]
            }
        case 'FETCH_NOTES':
            return {...state, notes: action.payload}
        case 'DELETE_NOTE':
            return {
                ...state,
                notes: state.notes.filter(note => note.identificator !== action.payload)
            }
        default:
            return state
    }
}