import React, { useCallback, useState } from 'react';
import { ButtonsContainer, StyledButtons } from './styled';
import InfoModal from '../InfoModal';

function InfosTableRow({ record }) {
    const { name, age, city } = record;
    const [openInfoModal, setOpenInfoModal] = useState(false);

    const toggleInfoModal = useCallback(() => {
        setOpenInfoModal(!openInfoModal);
    }, [openInfoModal]);

    const handleRemove = useCallback(() => {
        console.log(`remove ${name}`);
    }, []);

    const handleEditing = useCallback(() => {
        console.log(`editing ${name}`);
    }, []);

    return (
        <>
            <tr>
                <td>1</td>
                <td>{name || ''}</td>
                <td className='hidden-xs'>{age || ''}</td>
                <td className='hidden-xs'>{city || ''}</td>

                <td>
                    <InfoModal open={openInfoModal} close={toggleInfoModal} data={record} />
                    <ButtonsContainer>
                        <StyledButtons variant='primary' onClick={toggleInfoModal}>
                            Detalhes
                        </StyledButtons>

                        <StyledButtons variant='primary' onClick={handleEditing}>
                            Editar
                        </StyledButtons>
                        <StyledButtons variant='primary' onClick={handleRemove}>
                            Remover
                        </StyledButtons>
                    </ButtonsContainer>
                </td>
            </tr>
        </>
    );
}

export default InfosTableRow;
