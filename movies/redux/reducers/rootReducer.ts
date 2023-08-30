// ** Redux Imports
import { CombinedState, combineReducers } from 'redux'

// ** Reducers Imports
import movieReducer from './movies'
import videoReducer from './videos' 


const rootReducer = combineReducers({
  movieReducer,
  videoReducer
})

export default rootReducer
