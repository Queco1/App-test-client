import React, { useEffect } from 'react';
import { Jumbotron, Table } from 'react-bootstrap';

function ListInfo() {
    useEffect(() => {
        const records = localStorage.getItem('Register');
        console.log(records);
    }, []);
    return (
        <Jumbotron>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan='2'>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </Jumbotron>
    );
}

export default ListInfo;
