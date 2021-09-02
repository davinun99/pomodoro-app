import React, { useState, useEffect } from 'react'

import {Button, Container, Row, Col, Form, FloatingLabel, Alert} from 'react-bootstrap';
import { prefix } from '../helpers/utils';
const Main = ({setHeaderPrefix}) => {
    const INITIAL_STATE = {min:25, sec: 0};
    const [timer, setTimer] = useState(INITIAL_STATE);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [totalPomodoros, setTotalPomodoros] = useState(0);
    const [autoStart, setAutoStart] = useState(true);
    let audio = null;
    if(typeof Audio != "undefined") {
        audio = new Audio(`${prefix}/assets/notificationSound.wav`);
    }
    useEffect(() => {
        if(isTimerRunning){
            setHeaderPrefix(`${timer.min}:${timer.sec.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping:false})}`);
            setTimeout( ()=>{
                const {min, sec} = timer;
                if(min === sec && sec === 0){
                    audio.play();
                    setIsTimerRunning(false);
                    setTotalPomodoros(totalPomodoros+1);
                    setTimer( INITIAL_STATE );
                    if(autoStart){
                        setIsTimerRunning(true);
                    }
                }else if(sec === 0){
                    setTimer({
                        ...timer,
                        min: min -1,
                        sec: 59
                    });
                }else{
                    setTimer({
                        ...timer,
                        sec: sec - 1,
                    });
                }
            }, 1000)
        }
    }, [timer, isTimerRunning])

    const handleStopTimer = () => {
        setIsTimerRunning(false);
    }
    const handleStartTimer = () => {
        setIsTimerRunning(true);
        if(audio){
            audio.play();
        }
    }
    const handleResetTimer = () => {
        setIsTimerRunning(false);
        setTimeout(() => {
            setTimer( INITIAL_STATE );
            setIsTimerRunning(true);
        }, 1000);
    }
    return(
        <Container className="mainContainer d-flex justify-content-center">
            <div className="h-100 d-flex align-items-center">
                <Row>
                    <Col sm="12" className=" mt-5">
                        <h1 className="text-center">Pomodoro app</h1>
                    </Col>
                    <Col sm="12" className="my-3 d-flex justify-content-center">
                        <Col sm="10" md="6" lg="4">
                            <Form>
                                <Form.Group className="">
                                    <FloatingLabel
                                        controlId="pomodoroTag"
                                        label="Tag"
                                        className="mb-3"
                                        >
                                        <Form.Control type="text" placeholder="Study"/>
                                    </FloatingLabel>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Col>
                    <Col className="my-3">
                        <div className="text-center">
                            <span className="h4 p-3 border border-info rounded">{`${timer.min}:${timer.sec.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping:false})}`}</span>
                        </div>
                    </Col>
                    <Col sm="12" className="my-3">
                        <div className="text-center">
                            <Button variant="success" onClick={handleStartTimer}>Start</Button>{` `}
                            <Button variant="danger" onClick={handleStopTimer}>Stop</Button>{` `}
                            <Button variant="secondary" onClick={handleResetTimer}>Reset</Button>
                        </div>
                    </Col>
                    <Col sm="12" className="d-flex justify-content-center mt-3">
                        <Col sm="10" md="6" lg="4" className="text-center ">
                            {totalPomodoros ? 
                                <Alert variant="success">You have done {totalPomodoros} {totalPomodoros > 1 ? 'pomodoros' :'pomodoro' } today!</Alert>
                                :
                                <Alert variant="danger">No pomodoros today! ;(</Alert>
                            }
                        </Col>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}
export default Main;