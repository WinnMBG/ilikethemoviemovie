'use client';
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
    movies: []
}

const movieReducer = (state = initialState, action: { type: string; data: any; }) => {
    switch (action.type) {
        case HYDRATE:
            if(typeof action.data.original_title !== "string") delete action.data.original_title;
            if(typeof action.data.release_date !== "string") delete action.data.release_date;
            return {...state, ...action.data}
        case 'GET_MOVIES_BY_ID':
            return {...state, movies: action.data}
        case 'GET_MOVIES':
            return {...state, movies: action.data}
        default:
            return state;
    }
}

export default movieReducer