import { Video } from 'moviedb-promise';
const initialState = {
    video: {}
}

const videoReducer = (state = initialState, action: { type: string; data: any; }) => {
    switch (action.type) {
        case 'GET_VIDEOS':
            return{...state, video: action.data};
        default:
            return state;
    }
}

export default videoReducer