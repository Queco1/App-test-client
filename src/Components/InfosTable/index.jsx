import React, { useState, useMemo, useEffect } from 'react';
import { Table, Pagination, Card } from 'react-bootstrap';
import { toast } from 'react-toastify';
import InfosTableRow from '../InfosTableRow';
import { StyledTableFooter, StyledRow, StyledPagination, StyledColumnFooter } from './styled';
import { StyledCard } from '../Formulary/styled';
import http from '../../Config/http-comunication';

function InfoTable() {
    const [records, setRecords] = useState([]);
    const [offset, setOffset] = useState(0);
    const limit = 5;

    useEffect(async () => {
        if (!records.length) {
            try {
                const getAllUsers = await http.get('/user');

                setRecords(getAllUsers.data);
            } catch (error) {
                toast.error('Ocorreu um erro!', { position: 'bottom-right', autoClose: 5000, closeOnClick: true, progress: undefined });
            }
        }
    }, [records]);

    const paginetedRecord = useMemo(() => records?.slice(offset, offset + limit));

    return (
        <StyledCard>
            <Card.Title className=' text-center text-dark'>Pessoas Cadastradas</Card.Title>
            <Table striped hover responsive='sm'>
                <thead>
                    <tr>
                        <th scope='col'>Nome</th>
                        <th className='hidden-xs'>Idade</th>
                        <th className='hidden-xs'>Cidade</th>
                        <th scope='col'>Ações</th>
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
                        <StyledColumnFooter>
                            <StyledPagination>
                                <Pagination.Prev
                                    onClick={() => {
                                        setOffset(offset === 0 ? 0 : offset - limit);
                                    }}
                                />
                                <Pagination.Next
                                    onClick={() => {
                                        setOffset(offset >= records.length - limit ? offset : offset + limit);
                                    }}
                                />
                            </StyledPagination>
                        </StyledColumnFooter>
                    </StyledRow>
                </StyledTableFooter>
            </Table>
        </StyledCard>
    );
}

export default InfoTable;
