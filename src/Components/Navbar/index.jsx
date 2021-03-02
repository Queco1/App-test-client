import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarBrand } from 'react-bootstrap';
import { StyledNavbar, StyledContainer } from './styled';

function NavbarProvider() {
    return (
        <StyledNavbar bg='dark' variant='dark'>
            <StyledContainer>
                <NavbarBrand as={Link} to='/' className='col-md-11'>
                    Exemplo de Teste
                </NavbarBrand>
                <NavbarBrand as={Link} to='/' className='col align-self-end'>
                    Adicionar
                </NavbarBrand>
                <NavbarBrand as={Link} to='/list' className='justify-content-end'>
                    Listagem
                </NavbarBrand>
            </StyledContainer>
        </StyledNavbar>
    );
}

export default NavbarProvider;
