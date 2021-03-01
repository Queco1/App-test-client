import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RegisterForm from '../Components/RegisterForm';
import ListInfoTable from '../Components/ListInfosTable';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={RegisterForm} />
                <Route path='/List' exact component={ListInfoTable} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
