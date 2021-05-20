// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { createStore, applyMiddleware } from 'redux'

// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { contactsReducer } from './contacts';

// import logger from 'redux-logger';





import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import {
    persistStore,

    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import logger from 'redux-logger';

import { contactsReducer } from './contacts';


const reducers = combineReducers({
    contacts: contactsReducer,
});


const persistConfig = {
    key: 'root',
    storage,
};


const persistedReducer = persistReducer(persistConfig, reducers);


const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
    logger,
];

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
});



