export const alertReducer = (state, action) => {
    switch (action.type) {
        case 'SHOW_ALERT':
            return {
                ...state,
                visible: true,
                type: action.payload
            }
        case 'HIDE_ALERT':
            return {
                ...state,
                visible: false
            }
        default:
            return state
    }
}