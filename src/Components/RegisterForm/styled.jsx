import styled from 'styled-components';
import { Button, Form, Container, FormControl } from 'react-bootstrap';

export const StyledButton = styled(Button)`
    font-size: 1em;
    background-color: green;
    border-radius: 3px;
    margin: 8px;
    padding: 10px;
    justify-self: end;
`;
export const Title = styled.h1`
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
export const styledFormControl = styled(FormControl)``;
