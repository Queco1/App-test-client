import styled from 'styled-components';
import { Navbar, Container, NavbarBrand } from 'react-bootstrap';

export const StyledContainer = styled(Container)`
    margin: 0;
    display: flex;
    justify-content: flex-start;
`;

export const StyledNavbar = styled(Navbar)`
    margin-left: 0;
    border-radius: 0;
    display: flex;
`;

export const StyledNavbarLogo = styled(NavbarBrand)`
    margin: 0;
    justify-self ;
`;
