import { createStore, combineReducers } from "redux";
import GenralReducer from "./reducer/generalreducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    version: 1,
    storage
}

const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({ greduce: GenralReducer })
)
let store = createStore(persistedReducer, {})

export default store