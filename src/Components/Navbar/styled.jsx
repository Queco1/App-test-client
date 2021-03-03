import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';

export const StyledNavbar = styled(Navbar)`
    justify-content: center;
    border-radius: 0;
`;

export const StyledNavLogo = styled(Nav)`
    color: white;

    :hover {
        filter: brightness(0.25);
    }
`;

export const StyledNav = styled(Nav)`
    color: white;
    font-size: 2em;
    justify-self: end !important;
    :hover {
        filter: brightness(0.25);
    }
`;
