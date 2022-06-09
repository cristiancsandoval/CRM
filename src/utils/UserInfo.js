import React from 'react'
import { useUser } from '../hooks/useUser'

const UserInfo = () => {

    const user = useUser();
    const {avatar, name} = user;

    return (
        <div className='user-info'>
            <div className='cntr-photo'>
            <img src={avatar??''} alt='Foto usuario'/>
            </div>
            <h6>{name??''}</h6>
        </div>
    )
}

export default UserInfo