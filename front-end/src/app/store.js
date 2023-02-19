import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../app/components/counter/counterSlice.js'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});
