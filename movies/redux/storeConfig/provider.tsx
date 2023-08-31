'use client';

import { Provider } from "react-redux";
import { store } from "./store";
import { configDotenv } from "dotenv";
configDotenv();

export function Providers({ children }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}