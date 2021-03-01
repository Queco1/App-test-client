import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function InfoModal({ open }) {
    console.log(open);
    return (
        <Modal show={open}>
            <Modal.Header>
                <Modal.Title>Teste</Modal.Title>
            </Modal.Header>
            <Modal.Body>Teste</Modal.Body>
            <Modal.Footer>
                <Button variant='secondary'>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default InfoModal;
