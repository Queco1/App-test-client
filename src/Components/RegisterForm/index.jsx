import React, { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FormControl, Row, Col, Form } from 'react-bootstrap';
import { StyledButton, Title, StyledContainer, StyledCard, StyledLabel } from './styled';

function RegisterForm({ data }) {
    const [name, setName] = useState(data?.name || '');
    const [age, setAge] = useState(data?.age || '');
    const [maritalStatus, setMaritalStatus] = useState(data?.maritalStatus || '');
    const [CPF, setCPF] = useState(data?.CPF || '');
    const [state, setState] = useState(data?.state || '');
    const [city, setCity] = useState(data?.city || '');
    const history = useHistory();
    const [cityAsIBGE, setcityAsIBGE] = useState([]);

    useEffect(() => {
        if (!cityAsIBGE) {
            fetch('https://servicodados.ibge.gov.br/api/v1/localidades/distritos')
                .then((res) => res.json())
                .then((res) => {
                    setcityAsIBGE(res);
                });
        }
    }, [cityAsIBGE]);

    const handleSubmit = useCallback(() => {
        const register = { name, age, maritalStatus, CPF, state, city };

        localStorage.setItem('Register', JSON.stringify(register));
        history.push('/list');
    }, [name, age, maritalStatus, CPF, state, city]);

    return (
        <StyledCard>
            <StyledContainer>
                <Form>
                    <Title>Formulário de Cadastro </Title>
                    <Row>
                        <Col column sm='1'>
                            <StyledLabel>Nome:</StyledLabel>
                        </Col>
                        <Col>
                            <FormControl
                                required
                                placeholder='Nome'
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                        </Col>
                        <Col column sm='1'>
                            <StyledLabel>Idade:</StyledLabel>
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
                            <StyledLabel>Estado Civil:</StyledLabel>
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
                            <StyledLabel>CPF:</StyledLabel>
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
                            <StyledLabel>Estado:</StyledLabel>
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
                            <StyledLabel>Cidade:</StyledLabel>
                        </Col>
                        <Col sm='5'>
                            <FormControl
                                required
                                placeholder='Cidade'
                                as='select'
                                onChange={(e) => {
                                    setCity(e.target.value);
                                }}
                            >
                                {cityAsIBGE &&
                                    cityAsIBGE?.map((citie) => {
                                        return <option value={citie.nome}>{citie.nome}</option>;
                                    })}
                            </FormControl>
                        </Col>
                    </Row>
                    <Row className='justify-content-md-center'>
                        <Col xs lg='2'>
                            <StyledButton variant='primary' type='submit' onClick={handleSubmit}>
                                Salvar
                            </StyledButton>
                        </Col>
                    </Row>
                </Form>
            </StyledContainer>
        </StyledCard>
    );
}

export default RegisterForm;
