import React from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import { StyledModal } from './styled';

function InfoModal({ open, close, data }) {
    return (
        <>
            <StyledModal show={open} onClose={CloseEvent}>
                <Modal.Header>
                    <Modal.Title> Pessoa </Modal.Title>
                </Modal.Header>
                <Modal.Body className='show-grid'>
                    <Container>
                        <Row>
                            <Col>
                                <h1>{data?.name || ''}</h1>
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
