import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsSlice';
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

export const store = configureStore({
    reducer: {
        contacts: contactsSlice.reducer,
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

