import React from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import { StyledModal } from './styled';

function InfoModal({ open, close, data }) {
    return (
        <>
            <StyledModal
                className='mx-auto'
                show={open}
                onClose={CloseEvent}
                onHide={() => close(!open)}
                onEscapeKeyDown={(e) => {
                    if (e.key === 'Escape') {
                        close(!open);
                    }
                }}
            >
                <Modal.Header>
                    <Modal.Title> Usuário Cadastrado </Modal.Title>
                </Modal.Header>
                <Modal.Body className='show-grid'>
                    <Container>
                        <Row>
                            <Col>
                                <h4>Nome:</h4>
                            </Col>
                            <Col>
                                <h4>{data?.name || ''}</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h4>Idade:</h4>
                            </Col>
                            <Col>
                                <h4>{data?.age || ''}</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h4>Estado Civil:</h4>
                            </Col>
                            <Col>
                                <h4>{data?.maritalStatus || ''}</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h4>CPF:</h4>
                            </Col>
                            <Col>
                                <h4>{data?.CPF || ''}</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h4>Estado:</h4>
                            </Col>
                            <Col>
                                <h4>{data?.state || ''}</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h4>Cidade:</h4>
                            </Col>
                            <Col>
                                <h4>{data?.city || ''}</h4>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={close}>
                        Close
                    </Button>
                </Modal.Footer>
            </StyledModal>
        </>
    );
}

export default InfoModal;
