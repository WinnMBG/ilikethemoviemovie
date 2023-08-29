const initialState = {
}

const videoReducer = (state = initialState, action: { type: string; data: any; }) => {
    switch (action.type) {
        case 'GET_VIDEOS':
            return action.data;
        default:
            return state;
    }
}

export default videoReducer