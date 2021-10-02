export const setPomodoroDuration = (duration) => ({
    type: SET_POMODORO_DURATION,
    payload:duration,
});
export const setPomodoroConfiguration = (duration, autoStart) => ({
    type: SET_POMODORO_DURATION,
    payload: {duration, autoStart},
});