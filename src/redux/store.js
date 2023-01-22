import { createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
import rootReduxer from "./root-reducer";
import { persistStore } from 'redux-persist'


const middlewares = [];
 export const store = createStore(rootReduxer, applyMiddleware(...middlewares));

 export const persistor = persistStore(store)


// export default { store, persistor };