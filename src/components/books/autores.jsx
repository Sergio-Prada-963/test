import React from "react"

const Autores = ({ personaje }) => {
  return (
    <div className='flex flex-row justify-between card'>
      <div className='flex flex-row info-card'>
        <div>
          <img src={personaje.image} alt='img autor' className='imgAutor shadow-xl' />
        </div>
        <div className='flex flex-col'>
          <h6>{personaje.name}</h6>
          <p>{personaje.species}</p>
        </div>
      </div>
      <div className='flex flex-row info-card2'>
        <p>{personaje.species}</p>
        <h6>{personaje.status}</h6>
      </div>
    </div>
  )
}

export default Autores
