// store.js
import rootReducer from '@/redux/reducers/rootReducer'; // Your combined reducers
import {legacy_createStore as createStore} from 'redux'

const store = createStore(rootReducer);

export default store;
