import React from 'react';
import { ToastContainer } from 'react-toastify';

import Routes from '../Router/Routes';

function App() {
    return (
        <>
            <Routes />
            <ToastContainer />
        </>
    );
}

export default App;
