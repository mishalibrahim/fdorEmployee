import { combineReducers, configureStore } from "@reduxjs/toolkit"
import  commonReducer  from "./slices/commonSlice";
import  userReducer  from "./slices/userSlice";

import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import authReducer from "./slices/authSlice";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user'] // Only persist the userData slice
  };

const rootReducer = combineReducers({
    user: userReducer,
    common: commonReducer,
    auth:authReducer

});

const persistedReducer = persistReducer(persistConfig, rootReducer);


const makeStore = () =>{
    return configureStore({
        reducer:persistedReducer,
        middleware:(getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck:false
        })
    })
}

export const store = makeStore();

export const persistor = persistStore(store);

export default store;

