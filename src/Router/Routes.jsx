import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import RegisterForm from '../Components/Formulary';
import InfoTable from '../Components/InfosTable';
import NavbarProvider from '../Components/Navbar';

function Routes() {
    return (
        <>
            <BrowserRouter>
                <NavbarProvider />
                <Switch>
                    <Route path='/' exact component={RegisterForm} />
                    <Route path='/List' exact component={InfoTable} />
                    <Route path='/:id' component={RegisterForm} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default Routes;
