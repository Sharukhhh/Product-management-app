import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import {persistStore , persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key : 'user',
    storage
}

const userPersistReducer = persistReducer(persistConfig , userReducer);


export const store = configureStore({
    reducer : {
        user : userPersistReducer
    }
})

export const persistedStore = persistStore(store);
