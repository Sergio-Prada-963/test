import React from "react"

const Reciente = ({ reciente }) => {
  return (
    <div className='flex flex-row card-reciente'>
      <p className='reciente-p'>
        <span>{reciente.name}</span>
        {reciente.text}
      </p>
      <p>{reciente.date}</p>
    </div>
  )
}

export default Reciente
