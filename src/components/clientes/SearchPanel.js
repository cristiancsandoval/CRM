import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import React from 'react'

const SearchPanel = () => {
  return (
    <div className='search-panel'>
        <input
            type='search'
            placeholder='Buscar...'
        />
        <h6>
            {format(new Date(), 'MMMM dd', {locale:es})}
        </h6>
    </div>
  )
}

export default SearchPanel