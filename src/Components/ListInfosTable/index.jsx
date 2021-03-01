import React, { useEffect } from 'react';
import { Jumbotron, Table } from 'react-bootstrap';
import InfosTableRow from '../InfosTableRow';

function ListInfoTable() {
    useEffect(() => {
        const records = localStorage.getItem('Register');
        console.log(records);
    }, []);
    return (
        <Jumbotron>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Cidade</th>
                        <th>Detalhes</th>
                    </tr>
                </thead>
                <tbody>
                    <InfosTableRow />
                </tbody>
            </Table>
        </Jumbotron>
    );
}

export default ListInfoTable;
