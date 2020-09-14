import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import test from "./reducers/test";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  test,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWareList = [];
if (process.env.NODE_ENV === "development") {
  middleWareList.push(logger);
  middleWareList.push(thunk);
}
const composeEnhancers =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middleWareList))
);
export const persistor = persistStore(store);
