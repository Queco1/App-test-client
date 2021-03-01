import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FormLabel, FormControl, Row, Col, Jumbotron } from 'react-bootstrap';
import { StyledButton, Title, StyledForm, StyledContainer } from './styled';

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

        localStorage.setItem('Register', JSON.stringify(register));
        history.push('/list');
    }, [name, age, maritalStatus, CPF, state, city]);

    return (
        <Jumbotron>
            <StyledContainer>
                <Title>App de Teste </Title>
                <StyledForm>
                    <Row>
                        <FormLabel column sm='1'>
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
                        <Col column sm='1'>
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

                        <Col column sm='1'>
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

                        <Col column sm='1'>
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
                    </Row>

                    <Row>
                        <Col column sm='1'>
                            <FormLabel>Estado:</FormLabel>
                        </Col>
                        <Col sm='2'>
                            <FormControl
                                required
                                placeholder='Estado'
                                onChange={(e) => {
                                    setState(e.target.value);
                                }}
                            />
                        </Col>

                        <Col className='col-md-offset-3' column sm='1'>
                            <FormLabel>Cidade:</FormLabel>
                        </Col>
                        <Col sm='5'>
                            <FormControl
                                required
                                placeholder='Cidade'
                                onChange={(e) => {
                                    setCity(e.target.value);
                                }}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col className='col-md-offset-6 col-centered'>
                            <StyledButton variant='primary' type='submit' onClick={handleSubmit}>
                                Salvar
                            </StyledButton>
                        </Col>
                    </Row>
                </StyledForm>
            </StyledContainer>
        </Jumbotron>
    );
}

export default RegisterForm;
