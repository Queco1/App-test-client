import React, { useState, useCallback, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { FormControl, Col, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

import { StyledButton, Title, StyledContainer, StyledCard, StyledLabel, StyledRow, SubTitle } from './styled';
import http from '../../Config/http-comunication';

function RegisterForm() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [CPF, setCPF] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');

    const [statesIBGE, setStatesIBGE] = useState([]);
    const [id, setID] = useState('');

    const location = useRouteMatch();

    useEffect(async () => {
        if (!id && location?.params.id) {
            try {
                const data = await http.get(`/user/${location?.params.id}`);

                // eslint-disable-next-line no-underscore-dangle
                setID(data.data[0]._id);
                setName(data.data[0].name);
                setAge(data.data[0].age);
                setMaritalStatus(data.data[0].maritalStatus);
                setCPF(data.data[0].CPF);
                setState(data.data[0].state);
                setCity(data.data[0].city);
            } catch (Error) {
                toast.error('Ocorreu um erro!', { position: 'bottom-right', autoClose: 5000, closeOnClick: true, progress: undefined });
            }
        }
    }, [id, setName, setAge, setMaritalStatus, setCPF, setState, setCity]);

    useEffect(async () => {
        if (!statesIBGE.length) {
            const dataIBGE = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
            const IBGE = await dataIBGE.json();
            setState(IBGE[0].nome);
            setStatesIBGE(IBGE);
        }
    }, [statesIBGE]);

    const handleSubmitorEdit = useCallback(async () => {
        try {
            if (!age || !name || !maritalStatus || !CPF || !state || !city) {
                toast.error('Faltando algum campo a ser preenchido', {
                    position: 'bottom-right',
                    autoClose: 5000,
                    closeOnClick: true,
                    progress: undefined,
                });
                return;
            }

            const CPFValidation = /[0-9]{11}/g;

            if (!CPFValidation.test(Number(CPF))) {
                toast.error('CPF inválido', { position: 'bottom-right', autoClose: 5000, closeOnClick: true, progress: undefined });
                return;
            }
            if (id) {
                const edit = { id, name, age, maritalStatus, CPF, state, city };
                const response = await http.put(`/user/${id}`, edit);
                if (response.data) {
                    toast.success('Editado com sucesso!', {
                        position: 'bottom-right',
                        autoClose: 5000,
                        closeOnClick: true,
                        progress: undefined,
                    });
                }
            } else {
                const submit = { name, age, maritalStatus, CPF, state, city };
                const response = await http.post('/user', submit);
                if (response.data) {
                    toast.success('Adicionado com sucesso!', {
                        position: 'bottom-right',
                        autoClose: 5000,
                        closeOnClick: true,
                        progress: undefined,
                    });
                }
            }
        } catch (Error) {
            console.log(Error);
            toast.error('Ocorreu um erro!', { position: 'bottom-right', autoClose: 5000, closeOnClick: true, progress: undefined });
        }
    }, [name, age, maritalStatus, CPF, state, city]);
    return (
        <>
            <StyledCard>
                <StyledContainer>
                    <Form>
                        <Title>Formulário de Cadastro </Title>
                        <StyledRow>
                            <SubTitle>Informações Pessoais:</SubTitle>
                        </StyledRow>
                        <StyledRow>
                            <Col column sm='3'>
                                <StyledLabel>Nome:</StyledLabel>

                                <FormControl
                                    required
                                    value={name || ''}
                                    placeholder='Nome'
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                />
                            </Col>
                            <Col column sm='2'>
                                <StyledLabel>Idade:</StyledLabel>

                                <FormControl
                                    required
                                    type='number'
                                    min='0'
                                    value={age || ''}
                                    placeholder='Idade'
                                    onChange={(e) => {
                                        setAge(e.target.value);
                                    }}
                                />
                            </Col>

                            <Col column sm='3'>
                                <StyledLabel>Estado Civil:</StyledLabel>

                                <FormControl
                                    required
                                    value={maritalStatus || ''}
                                    placeholder='Estado Civil'
                                    onChange={(e) => {
                                        setMaritalStatus(e.target.value);
                                    }}
                                />
                            </Col>

                            <Col column sm='3'>
                                <StyledLabel>CPF:</StyledLabel>

                                <FormControl
                                    required
                                    value={CPF || ''}
                                    type='number'
                                    min='0'
                                    placeholder='CPF'
                                    onChange={(e) => {
                                        setCPF(e.target.value);
                                    }}
                                />
                            </Col>
                        </StyledRow>
                        <StyledRow>
                            <SubTitle>Endereço:</SubTitle>
                        </StyledRow>
                        <StyledRow>
                            <Col column sm='2'>
                                <StyledLabel>Estado:</StyledLabel>

                                <FormControl
                                    required
                                    value={state || ''}
                                    as='select'
                                    placeholder='Estado'
                                    onChange={(e) => {
                                        setState(e.target.value);
                                    }}
                                >
                                    {statesIBGE &&
                                        statesIBGE?.map((stateIBGE) => {
                                            return (
                                                <option key={stateIBGE.id} value={stateIBGE?.nome || ''}>
                                                    {stateIBGE.nome}
                                                </option>
                                            );
                                        })}
                                </FormControl>
                            </Col>

                            <Col className='col-md-offset-1' column sm='4'>
                                <StyledLabel>Cidade:</StyledLabel>

                                <FormControl
                                    required
                                    value={city || ''}
                                    placeholder='Cidade'
                                    onChange={(e) => {
                                        setCity(e.target.value);
                                    }}
                                />
                            </Col>
                        </StyledRow>
                        <StyledRow>
                            <StyledButton variant='primary' type='button' onClick={handleSubmitorEdit} className='justify-content-center'>
                                Salvar
                            </StyledButton>
                        </StyledRow>
                    </Form>
                </StyledContainer>
            </StyledCard>
        </>
    );
}

export default RegisterForm;
