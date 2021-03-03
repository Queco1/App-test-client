import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaInfo, FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';
import { ButtonsContainer, StyledButtons } from './styled';
import InfoModal from '../InfoModal';
import http from '../../Config/http-comunication';

function InfosTableRow({ record }) {
    const { name, age, city, _id: id } = record;
    const [openInfoModal, setOpenInfoModal] = useState(false);

    const history = useHistory();

    const toggleInfoModal = useCallback(() => {
        setOpenInfoModal(!openInfoModal);
    }, [openInfoModal]);

    const handleRemove = useCallback(async () => {
        try {
            await http.delete(`/user/${id}`);
            toast.success('Removido com sucesso!', { position: 'bottom-right', autoClose: 5000, closeOnClick: true, progress: undefined });
            history.push('/');
        } catch (error) {
            toast.error('Ocorreu um erro!', { position: 'bottom-right', autoClose: 5000, closeOnClick: true, progress: undefined });
        }
    }, [record]);

    const handleEdit = useCallback(() => {
        history.push(`/${id}`);
    }, [record]);

    return (
        <>
            {record && (
                <tr key={id}>
                    <td className='col-xs-1'>{name || ''}</td>
                    <td className='hidden-xs'>{age || ''}</td>
                    <td className='hidden-xs'>{city || ''}</td>

                    <td>
                        <InfoModal open={openInfoModal} close={toggleInfoModal} data={record} />
                        <ButtonsContainer>
                            <StyledButtons variant='dark' onClick={toggleInfoModal}>
                                <FaInfo />
                            </StyledButtons>

                            <StyledButtons variant='dark' onClick={handleEdit}>
                                <FaEdit />
                            </StyledButtons>
                            <StyledButtons variant='dark' onClick={handleRemove}>
                                <MdDelete />
                            </StyledButtons>
                        </ButtonsContainer>
                    </td>
                </tr>
            )}
        </>
    );
}

export default InfosTableRow;
