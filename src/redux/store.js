import { configureStore } from '@reduxjs/toolkit';
import {clickSlice} from './clickSlice'

export const store = configureStore({
    reducer: {
        clicks: clickSlice.reducer,
    }
});