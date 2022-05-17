import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { contactsReducer } from './contactsSlice';

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
    },
    
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        });
    },

    
    // middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(),logger]
});

export const persistor = persistStore(store);

const s = store.getState()
console.log(s);

