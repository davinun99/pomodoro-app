import * as types from './types';

export const setPomodoroDuration = (duration) => ({
    type: types.SET_POMODORO_DURATION,
    payload:duration,
});
export const setPomodoroConfiguration = (duration, autoStart) => ({
    type: types.SET_POMODORO_CONFIGURATION,
    payload: {duration, autoStart},
});