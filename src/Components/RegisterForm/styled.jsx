import styled from 'styled-components';
import { Button, Form, Container, Card, FormLabel } from 'react-bootstrap';

export const StyledButton = styled(Button)`
    font-size: 1em;
    background-color: green;
    border-radius: 3px;
    margin: 8px;
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
`;
export const Title = styled.h1`
    font-size: 3em;
    text-align: center;
`;
export const StyledLabel = styled(FormLabel)`
    font-size: 1.5em;
    text-align: center;
`;
export const StyledForm = styled(Form)`
    display: Grid;
    padding: 10px;
    margin: 8px;
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
