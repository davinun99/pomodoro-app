import { combineReducers, createStore } from "redux";
import pomodoroReducer from "./reducer";

const rootReducer = combineReducers({
    pomodoroReducer 
});

const store = createStore(rootReducer);
export default store ;