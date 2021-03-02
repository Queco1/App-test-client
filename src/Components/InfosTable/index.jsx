import React from 'react';
import { Jumbotron, Table } from 'react-bootstrap';
import InfosTableRow from '../InfosTableRow';
import { StyledTableFooter } from './styled';

function InfoTable() {
    const records = [JSON.parse(localStorage.getItem('Register'))];
    // const PaginetedRecord = useMemo(() => records?.slice(offset, limit));
    return (
        <Jumbotron>
            <Table striped bordered hover responsive='sm'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th className='hidden-xs'>Idade</th>
                        <th className='hidden-xs'>Cidade</th>
                        <th>Detalhes</th>
                    </tr>
                </thead>
                <tbody>
                    {records?.map((record) => {
                        return <InfosTableRow record={record} />;
                    })}
                </tbody>
                <StyledTableFooter>
                    <tr>#</tr>
                </StyledTableFooter>
            </Table>
        </Jumbotron>
    );
}

export default InfoTable;
