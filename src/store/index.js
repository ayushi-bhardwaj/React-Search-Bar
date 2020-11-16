import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger"
import { persistStore, persistReducer } from 'redux-persist'
import reducer from "../reducers/index"
import storage from 'redux-persist/lib/storage'
const persistConfig={
    key: 'root',
    storage

}
 
const persistedReducer = persistReducer(persistConfig, reducer)

// export function configureStore(){
//     store=createStore(reducer,applyMiddleware(thunk, logger));

//     return store;
// }
export default () => {
    let store = createStore(persistedReducer,applyMiddleware(thunk, logger))
    let persistor = persistStore(store)
    return { store, persistor }
  }