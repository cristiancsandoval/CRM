import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Clientes from '../components/clientes/Clientes';
import Navbar from '../components/navbar/Navbar';
import Welcome from '../components/welcome/Welcome';
import { UserContext } from '../context/UserContext';
import { getUser } from '../services/user';
import Loader from '../utils/Loader';

const AppRouter = () => {

    const userId = '39795399';
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        getUser(userId)
            .then(response => {
                setUser(response.data.profile);
                setLoading(false);
            })
            .catch(e => console.log(e))

    }, []);

    if (loading) {
        return <Loader />
    }

    return (
        <UserContext.Provider value={user}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='*' element={<Welcome />} />
                    <Route path='/clientes' element={<Clientes />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}

export default AppRouter