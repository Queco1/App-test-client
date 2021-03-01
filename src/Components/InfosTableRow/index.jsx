import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';

function InfosTableRow() {
    useEffect(() => {}, []);
    return (
        <tr>
            <td>1</td>
            <td>Teste</td>
            <td>25</td>
            <td>Teste</td>
            <Button variant='primary'>Detalhes</Button>
        </tr>
    );
}

export default InfosTableRow;
