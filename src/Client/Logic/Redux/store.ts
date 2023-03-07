/**
 * @File File Content
 *
 * @Email alexander.bassov@trentmann.com
 */

import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  devTools: ENV.APP_MODE !== "production",
  preloadedState: {},
  middleware: middlewares,
});

sagaMiddleware.run(rootSaga);

export default store;
