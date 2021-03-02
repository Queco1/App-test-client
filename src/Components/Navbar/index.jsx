import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarBrand, FormGroup } from 'react-bootstrap';
import { StyledNavbar, StyledContainer } from './styled';

function NavbarProvider() {
    return (
        <StyledNavbar bg='dark' variant='dark'>
            <StyledContainer>
                <NavbarBrand as={Link} to='/'>
                    Exemplo de Teste
                </NavbarBrand>
                <FormGroup>
                    <NavbarBrand as={Link} to='/'>
                        Adicionar
                    </NavbarBrand>
                    <NavbarBrand as={Link} to='/list'>
                        Listagem
                    </NavbarBrand>
                </FormGroup>
            </StyledContainer>
        </StyledNavbar>
    );
}

export default NavbarProvider;
