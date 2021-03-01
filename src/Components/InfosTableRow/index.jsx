import React, { useCallback, useState } from 'react';
import { ButtonsContainer, StyledButtons } from './styled';
import InfoModal from '../InfoModal';

function InfosTableRow({ record }) {
    const { name, age, city } = record;
    const [openInfoModal, setOpenInfoModal] = useState(false);

    const toggleInfoModal = useCallback(() => {
        setOpenInfoModal(!openInfoModal);
    }, [openInfoModal]);

    return (
        <>
            <InfoModal open={openInfoModal} close={setOpenInfoModal} />
            <tr>
                <td>1</td>
                <td>{name || ''}</td>
                <td>{age || ''}</td>
                <td>{city || ''}</td>

                <td>
                    <ButtonsContainer>
                        <StyledButtons variant='primary' onClick={toggleInfoModal}>
                            Detalhes
                        </StyledButtons>

                        <StyledButtons variant='primary'>Editar</StyledButtons>
                        <StyledButtons variant='primary'>Remover</StyledButtons>
                    </ButtonsContainer>
                </td>
            </tr>
        </>
    );
}

export default InfosTableRow;
