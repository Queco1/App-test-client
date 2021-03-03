import styled from 'styled-components';
import { Pagination } from 'react-bootstrap';

export const StyledTableFooter = styled.tfoot`
    left: 0;
    bottom: 0;
    z-index: 2;
    padding: 0;
`;
export const StyledRow = styled.tr`
    border-color: white;
    margin: 0 !important;
`;

export const StyledColumnFooter = styled.th`
    border: none !important;
`;

export const StyledPagination = styled(Pagination)`
    border-color: white;
    margin: 0 !important;
`;
