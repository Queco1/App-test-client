import React, { useState, useMemo, useEffect } from 'react';
import { Table, Pagination, Card } from 'react-bootstrap';
import InfosTableRow from '../InfosTableRow';
import { StyledTableFooter, StyledRow, StyledPagination } from './styled';
import { StyledCard } from '../RegisterForm/styled';
import http from '../../Config/Axios';

function InfoTable() {
    const [records, setRecords] = useState([]);
    const [offset, setOffset] = useState(0);
    const [limit] = useState(2);

    useEffect(async () => {
        if (records.length === 0) {
            const getAllUsers = await http.get('/user');

            setRecords(getAllUsers.data);
        }
    }, [records]);

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
                        // eslint-disable-next-line no-underscore-dangle
                        return <InfosTableRow key={`${record._id}`} record={record} />;
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
