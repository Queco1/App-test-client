import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';

function InfosTableRow() {
    useEffect(() => {
        const records = localStorage.getItem('Register');
    }, []);
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
