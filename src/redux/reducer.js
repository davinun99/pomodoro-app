import * as types from './types';
const INITIAL_STATE = {
    duration: 25,
    autoStart: true,    
}

const pomodoroReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case types.SET_POMODORO_DURATION:
            return{
                ...state,
                duration: action.payload,
            };
        case types.SET_POMODORO_CONFIGURATION:
            const {duration, autoStart} = action.payload;
            return{
                ...state,
                duration,
                autoStart
            }
        default:
            return {...state};
    }
}
export default pomodoroReducer;