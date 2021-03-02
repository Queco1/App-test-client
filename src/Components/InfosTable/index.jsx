import React, { useState, useMemo } from 'react';
import { Table, Pagination, Card } from 'react-bootstrap';
import InfosTableRow from '../InfosTableRow';
import { StyledTableFooter, StyledRow, StyledPagination } from './styled';
import { StyledCard } from '../RegisterForm/styled';

function InfoTable() {
    const records = [
        JSON.parse(localStorage.getItem('Register')),
        JSON.parse(localStorage.getItem('Register')),
        JSON.parse(localStorage.getItem('Register')),
        { name: 'Pedro', age: 14, city: 'Juiz de Fora' },
    ];
    const [offset, setOffset] = useState(0);
    const [limit] = useState(2);
    const paginetedRecord = useMemo(() => records?.slice(offset, offset + limit));

    return (
        <StyledCard>
            <Card.Title className=' text-center text-dark'>Pessoas Cadastradas</Card.Title>
            <Table striped hover responsive='sm'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th className='hidden-xs'>Idade</th>
                        <th className='hidden-xs'>Cidade</th>
                        <th className='col-md-'>Detalhes</th>
                    </tr>
                </thead>
                <tbody>
                    {paginetedRecord?.map((record) => {
                        return <InfosTableRow record={record} />;
                    })}
                </tbody>
                <StyledTableFooter>
                    <StyledRow>
                        <StyledPagination>
                            <Pagination.Prev
                                onClick={() => {
                                    setOffset(offset === 0 ? 0 : offset - limit);
                                }}
                            />
                            <Pagination.Next
                                onClick={() => {
                                    setOffset(offset === records.length - limit - 1 ? offset : offset + limit);
                                }}
                            />
                        </StyledPagination>
                    </StyledRow>
                </StyledTableFooter>
            </Table>
        </StyledCard>
    );
}

export default InfoTable;
