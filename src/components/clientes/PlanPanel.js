import React from 'react'

const PlanPanel = () => {
  return (
    <div className='plan-panel'>
      <h4>Tu plan de hoy</h4>
      <div>
        <div>
          <h5>Leads de primer contacto</h5>
          <h6>30</h6>
        </div>
        <div>
          <h5>Leads por confirmar cita</h5>
          <h6>30</h6>
        </div>
        <div>
          <h5>Leads último intento</h5>
          <h6>30</h6>
        </div>
      </div>
    </div>
  )
}

export default PlanPanel