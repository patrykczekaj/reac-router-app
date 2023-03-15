import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import ErrorPage from './ErrorPage';

const permission = true;

const AdminPage = () => {
    return ( 
        <Routes>
            <Route path='/' element={
                permission ? (<h3>Panel admina - dzień dobry</h3>) : (<Navigate to='/login'/>) } />
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
     );
}
 
export default AdminPage;