import React, { useState, useEffect } from 'react'

import {Button, Container, Row, Col} from 'react-bootstrap';

const Main = ({setHeaderPrefix}) => {
    const [timer, setTimer] = useState({min:25, sec: 0});
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    let audio = null;
    if(typeof Audio != "undefined") {
        audio = new Audio('../assets/notificationSound.wav');
    }
    useEffect(() => {
        if(isTimerRunning){
            setHeaderPrefix(`${timer.min}:${timer.sec.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping:false})}`);
            setTimeout( ()=>{
                const {min, sec} = timer;
                if(min === sec && sec === 0){
                    audio.play();
                    setIsTimerRunning(false);
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
            console.log("xd");
            audio.play();
        }
    }
    return(
        <Container className="justify-content-center">
            <Row>
                <Col sm="12" className=" mt-5">
                    <h1 className="text-center">Pomodoro app</h1>
                </Col>
                <Col className="my-3">
                    <div className="text-center">
                        <span className="h4 p-3 border border-info rounded">{`${timer.min}:${timer.sec.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping:false})}`}</span>
                    </div>
                </Col>
                <Col sm="12" className=" mt-3">
                    <div className="text-center">
                        <Button variant="success" onClick={handleStartTimer}>Start timer</Button>{` `}
                        <Button variant="danger" onClick={handleStopTimer}>Stop timer</Button>
                    </div>
                </Col>
                
            </Row>
        </Container>
    );
}
export default Main;