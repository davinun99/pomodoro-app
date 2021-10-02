import React, { useState } from 'react'
import {Button, Container, Row, Col, Form, FloatingLabel, Alert} from 'react-bootstrap';
import { useTimer } from 'react-timer-hook';
import {AiFillSetting} from 'react-icons/ai';
import Link from 'next/link';
import { prefix } from '../helpers/utils';
import { connect } from 'react-redux';

const Main = ({duration, autoStart}) => {
    
    const [timerHasStarted, setTimerHasStarted] = useState(false);
    const [totalPomodoros, setTotalPomodoros] = useState(0);
    let audio = typeof Audio != "undefined" ? new Audio(`${prefix}/assets/notificationSound.wav`) : null;

    const getDuration = (minutes) => {
        const expiryTimestamp = new Date();
        expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + minutes * 60); // Use to be 12300 to equal 25 AND 25 * 492 = 12300
        return expiryTimestamp;
    }
    const onExpire = () => {
        audio.play();
        setTimerHasStarted(false);
        setTotalPomodoros(totalPomodoros+1);            
    }
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp: getDuration(duration), onExpire, autoStart }); 

    const handleStopTimer = () => {
        if(timerHasStarted){
            pause();
        }
    }
    const handleStartTimer = () => {
        if(!timerHasStarted){
            setTimerHasStarted( true );
            start();
        }else{
            resume();
        }
        audio.play();
    }
    const handleResetTimer = () => {
        restart( getDuration(duration) );
    }
    const secondsFormatted = seconds.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping:false});
    return(
        <Container className="mainContainer d-flex justify-content-center">
            <div className="h-100 d-flex align-items-center">
                <Row>
                    <Col sm="12" className=" mt-5">
                        <h1 className="text-center"><span className="m-3">Pomodoro app</span>
                            <Link href="/">
                                <a className="settings-icon-parent"><AiFillSetting size={30}/></a>
                            </Link>
                        </h1>
                        
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
                            <span className="h4 p-3 border border-info rounded">{`${minutes}:${secondsFormatted}`}</span>
                        </div>
                    </Col>
                    <Col sm="12" className="my-3">
                        <div className="text-center">
                            <Button variant="success" onClick={handleStartTimer}>Start</Button>{` `}
                            <Button variant="danger" onClick={handleStopTimer}>Pause</Button>{` `}
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
const mapStateToProps = (state) =>{
    const {duration, autoStart} = state.pomodoro;
    return {duration, autoStart};
}
export default connect(mapStateToProps, {})(Main);