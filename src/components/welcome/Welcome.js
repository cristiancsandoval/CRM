import React from 'react'
import { Link } from 'react-router-dom';
import { useUser } from '../../hooks/useUser'

const Welcome = () => {

    const user = useUser();
    const {name} = user;

    return (
        <main className='main-welcome'>
            <h2>
                {`Hola ${name??''},`}
            </h2>
            <h3>
                te damos la bienvenida
            </h3>
            <Link 
                to='/clientes'
            >
                Ver clientes
            </Link>
        </main>
    )
}

export default Welcome