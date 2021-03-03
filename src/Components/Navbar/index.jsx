import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegListAlt, FaList } from 'react-icons/fa';
import { StyledNavbar, StyledNavLogo, StyledNav } from './styled';

function NavbarProvider() {
    return (
        <StyledNavbar bg='dark' variant='dark'>
            <StyledNav as={Link} to='/' className='hidden-xs mr-sm-2'>
                Adicionar
            </StyledNav>
            <StyledNavLogo as={Link} to='/'>
                <FaRegListAlt size={42} className='col-sm-2' />
            </StyledNavLogo>
            <StyledNav as={Link} to='/list' className='hidden-xs mr-sm-2 '>
                Listagem
            </StyledNav>
            <StyledNavLogo as={Link} to='/list'>
                <FaList size={42} className='col-sm-2' />
            </StyledNavLogo>
        </StyledNavbar>
    );
}

export default NavbarProvider;
