// store.js
import rootReducer from '@/redux/reducers/rootReducer'; // Your combined reducers
import {legacy_createStore as createStore} from 'redux'
import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export const wrapper = createWrapper<AppStore>(makeStore);

export default makeStore;
