import {combineReducers, createStore, compose, applyMiddleware } from "redux";
import pomodoroReducer from "./reducer";

const rootReducer = combineReducers({
    pomodoro: pomodoroReducer 
});
const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const INITIAL_STATE = {pomodoro: {
    duration: 25,
    autoStart: true,
}};
const store = createStore(rootReducer, INITIAL_STATE, composeEnhancers(
    applyMiddleware()
));
export default store ;