const initialState = {
    movies: []
}

const movieReducer = (state = initialState, action: { type: string; data: any; }) => {
    switch (action.type) {
        case 'GET_MOVIES_BY_ID':
            return {...state, movies: action.data}
        case 'GET_MOVIES':
            return {...state, movies: action.data}
        default:
            return state;
    }
}

export default movieReducer