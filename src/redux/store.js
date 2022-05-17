import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsSlice';
import  logger  from 'redux-logger';

export const store = configureStore({
    reducer: {
        contacts: contactsSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(),logger]
});


const s = store.getState()
console.log(s);