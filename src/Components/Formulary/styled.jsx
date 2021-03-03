import styled from 'styled-components';
import { Button, Row, Container, Card, FormLabel } from 'react-bootstrap';

export const StyledButton = styled(Button)`
    font-size: 1em;
    border-radius: 3px;
    margin: 8px;
    padding: 10px 20px;
    margin-left: auto;
    margin-right: auto;
`;
export const Title = styled.h1`
    font-size: 3em;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
`;
export const SubTitle = styled.h2`
    font-size: 2em;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
`;
export const StyledLabel = styled(FormLabel)`
    font-size: 1.5em;
    text-align: center;
`;
export const StyledRow = styled(Row)`
    margin-top: 15px;
`;
export const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: column;
`;
export const StyledCard = styled(Card)`
    font-size: 1em;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
`;
