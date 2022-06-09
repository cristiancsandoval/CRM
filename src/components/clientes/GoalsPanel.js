import React from 'react';
import { useUser } from '../../hooks/useUser';

const GoalsPanel = () => {

  const user = useUser();
  const {name} = user;

  return (
    <div className='goals-panel'>
      <h3>{`Hola, ${name??''}`}</h3>
      <div>
        <div>
          <h4>50%</h4>
        </div>
        <div>
          <div>
            <h5>Leads obtenidos</h5>
            <h6>50/100</h6>
          </div>
          <div>
            <h5>Matriculas finalizadas</h5>
            <h6>10/20</h6>
          </div>
          <div>
            <h5>Cola de llamados</h5>
            <h6>50/100</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GoalsPanel