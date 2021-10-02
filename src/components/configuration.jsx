import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import {Container, Row, Col, Form, FloatingLabel, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import {setPomodoroConfiguration} from '../redux/actions';

const Configuration = (props) => {
    const router = useRouter();
    const handleSubmit = e => {
        e.preventDefault();
        props.setPomodoroConfiguration(duration, autoStart);
        router.push('/pomodoro');
    }
    const [duration, setDuration] = useState(0);
    const [autoStart, setAutoStart] = useState(false);
    useEffect(()=> {
        setDuration(props.duration);
        setAutoStart(props.autoStart);
    }, [props.duration, props.autoStart]);
    return(
        <Container className="mainContainer d-flex justify-content-center">
            <div className="h-100 d-flex align-items-center">
                <Row>
                    <Col sm="12" className=" mt-5">
                        <h1 className="text-center">Pomodoro app</h1>
                    </Col>
                    <Col sm="12" className="my-3 d-flex justify-content-center">
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Duration"
                                        className=""
                                    >
                                        <Form.Control type="number" placeholder="25" 
                                        value={`${duration}`}
                                        onChange={ e => setDuration(Number(e.target.value)) }
                                        />
                                    </FloatingLabel>
                                </Col>
                                <Col className="d-flex align-items-center">
                                    <Form.Check 
                                        type="checkbox"
                                        id="autoStart"
                                        label="Auto start?"
                                        checked={autoStart}
                                        onChange={ e => setAutoStart(Boolean(e.target.checked)) }
                                    />
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Button type="submit" className=" col-12 btn btn-primary">Go</Button>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}
const mapStateToProps = (state) => {
    const {autoStart, duration} = state.pomodoro;
    return {autoStart, duration};
}
const mapDispatchToProps = {
    setPomodoroConfiguration
}
export default connect(mapStateToProps, mapDispatchToProps)(Configuration);