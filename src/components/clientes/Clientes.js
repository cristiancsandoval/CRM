import React from 'react'
import AgendaPanel from './AgendaPanel'
import GoalsPanel from './GoalsPanel'
import SearchPanel from './SearchPanel'

const Clientes = () => {
  return (
    <main className='main-clientes'>
        <SearchPanel/>
        <GoalsPanel/>
        <AgendaPanel/>
    </main>
  )
}

export default Clientes