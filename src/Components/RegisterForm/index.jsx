import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FormLabel, FormControl, Row, Col, Jumbotron } from 'react-bootstrap';
import { StyledButton, Title, StyledForm } from './styled';

function RegisterForm() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [CPF, setCPF] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const history = useHistory();

    const handleSubmit = useCallback(() => {
        const register = { name, age, maritalStatus, CPF, state, city };
        const allRegisters = localStorage.getItem('Register') ? [JSON.parse(localStorage.getItem('Register'))] : [];
        console.log(allRegisters);
        localStorage.setItem('Register', [...allRegisters, JSON.stringify(register)]);
        history.push('/list');
    }, [name, age, maritalStatus, CPF, state, city]);
    return (
        <Jumbotron>
            <StyledForm>
                <Row>
                    <Title>App de Teste </Title>
                </Row>
                <Row>
                    <Col xs='6'>
                        <FormLabel column sm='2'>
                            Nome:
                        </FormLabel>
                        <Col sm='3'>
                            <FormControl
                                required
                                placeholder='Nome'
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                        </Col>
                    </Col>
                    <Col xs='6'>
                        <Col column sm='2'>
                            <FormLabel>Idade:</FormLabel>
                        </Col>
                        <Col sm='1'>
                            <FormControl
                                required
                                placeholder='00'
                                onChange={(e) => {
                                    setAge(e.target.value);
                                }}
                            />
                        </Col>
                    </Col>
                </Row>
                <Row>
                    <Col xs='6'>
                        <Col column sm='2'>
                            <FormLabel>Estado Civil:</FormLabel>
                        </Col>
                        <Col sm='2'>
                            <FormControl
                                required
                                placeholder='Estado Civil'
                                onChange={(e) => {
                                    setMaritalStatus(e.target.value);
                                }}
                            />
                        </Col>
                    </Col>
                    <Col xs='6'>
                        <Col column sm='2'>
                            <FormLabel>CPF:</FormLabel>
                        </Col>
                        <Col sm='2'>
                            <FormControl
                                required
                                placeholder='CPF'
                                onChange={(e) => {
                                    setCPF(e.target.value);
                                }}
                            />
                        </Col>
                    </Col>
                </Row>

                <Row>
                    <Col xs='6'>
                        <Col column sm='2'>
                            <FormLabel>Estado:</FormLabel>
                        </Col>
                        <Col sm='1'>
                            <FormControl
                                required
                                placeholder='Estado'
                                onChange={(e) => {
                                    setState(e.target.value);
                                }}
                            />
                        </Col>
                    </Col>
                    <Col xs='6'>
                        <Col column sm='2'>
                            <FormLabel>Cidade:</FormLabel>
                        </Col>
                        <Col sm='3'>
                            <FormControl
                                required
                                placeholder='Cidade'
                                onChange={(e) => {
                                    setCity(e.target.value);
                                }}
                            />
                        </Col>
                    </Col>
                </Row>
                <Row className='justify-content-md-center'>
                    <Col xs lg='6'>
                        <StyledButton variant='primary' type='submit' onClick={handleSubmit}>
                            Salvar
                        </StyledButton>
                    </Col>
                </Row>
            </StyledForm>
        </Jumbotron>
    );
}

export default RegisterForm;
