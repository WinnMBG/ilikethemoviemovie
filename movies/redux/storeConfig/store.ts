// store.js
'use client';

import rootReducer from '@/redux/reducers/rootReducer'; // Your combined reducers
import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';

// const makeStore = () =>
//   configureStore({
//     reducer: rootReducer,
//     devTools: true,
//   });

// export type AppStore = ReturnType<typeof makeStore>;
// export const wrapper = createWrapper<AppStore>(makeStore);

// export default makeStore;


export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
