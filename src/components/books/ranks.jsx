import React from "react"

const Ranks = ({ data }) => {
  return (
    <div className='flex flex-col p-4 shadow-xl ranks'>
      <p>{data.titulo}</p>
      <h5>{data.rank}</h5>
    </div>
  )
}

export default Ranks
