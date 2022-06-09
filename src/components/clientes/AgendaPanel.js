import React, { useEffect, useState } from 'react'
import { getClientes } from '../../services/clientes'
import Loader from '../../utils/Loader';
import PlanPanel from './PlanPanel'

const AgendaPanel = () => {

  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    getClientes()
      .then((response) => {
        setClientes(response.data.splice(0, 30));
        setLoading(false);
      })
      .catch((e) => console.log(e))

  }, []);

  if (loading) {
    return <Loader />
  }

  return (
    <div className='agenda-panel'>
      <div className='agenda-table'>
        {
          clientes.map((cliente) => (
            <div key={cliente.steamid}>
              <h6>{cliente.name ?? ''}</h6>
              <button>Llamar</button>
            </div>
          ))
        }
      </div>
      <PlanPanel />
    </div>
  )
}

export default AgendaPanel