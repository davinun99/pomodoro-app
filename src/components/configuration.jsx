import React from 'react'
import Link from 'next/link';
import {Container, Row, Col, Form, FloatingLabel, Button} from 'react-bootstrap';

const Configuration = () => {
    const handleSubmit = e => {
        e.preventDefault();
    }
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
                                        <Form.Control type="number" placeholder="25" />
                                    </FloatingLabel>
                                </Col>
                                <Col className="d-flex align-items-center">
                                    <Form.Check 
                                        type="checkbox"
                                        id="autoStart"
                                        label="Auto start?"
                                    />
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                {/* <Col sm="12"> */}
                                    <Link href="/pomodoro">
                                        <a  className=" col-12 btn btn-primary">Go</a>
                                    </Link>
                                {/* </Col> */}
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}
export default Configuration;