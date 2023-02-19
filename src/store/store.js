import createSagaMiddleware from "@redux-saga/core"
import { applyMiddleware, compose, createStore } from "redux"
import rootReducer from './reducer'
import rootSaga from "./saga"

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
export default store
