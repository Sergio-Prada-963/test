import React from "react"

import Perfil from "../../assets/perfil.jpg"
import Cards from "./cards"

const News = () => {
  /* datos para las cards */
  const data = [
    {
      img1: "hojas.jpg",
      titulo: "La Ciudadela",
      text: "Descubre las maravillas escondidas en los bosques de Estados unidos",
      img2: "persona1.jpg",
      nombre: "David Jones",
      fecha: "May 6, 2020",
    },
    {
      img1: "space.jpg",
      titulo: "Space X",
      text: "Elon Musk, un emprendedor con otra visión multimillonaria",
      img2: "persona2.jpg",
      nombre: "Lauren Murphy",
      fecha: "May 3, 2020",
    },
  ]
  return (
    <div>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-row cont-icons'>
          <div>
            <div className='icon-campana iconos'>
              <i className='fa-regular fa-bell'></i>
            </div>
          </div>
          <div>
            <div className='icon-email iconos'>
              <i className='fa-regular fa-envelope'></i>
            </div>
          </div>
        </div>
        <div className='flex flex-row info-user'>
          <h3>Andrés Vargas</h3>
          <div>
            <img src={Perfil} alt='img perfil' />
          </div>
        </div>
      </div>
      <div className='flex flex-col data-2 shadow-xl news '>
        <div className='flex flex-row justify-between nav-autores p-3'>
          <h5>Lo último</h5>
          <button>Ver Todo</button>
        </div>
        <div className='flex flex-row options'>
          <i className='fa-solid fa-chevron-right'></i>
          <p>Reciente</p>
          <p>Popular</p>
        </div>
        <div className='cont-reciente flex flex-col cont-news-card'>
          {data.map((e) => (
            <Cards data={e} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default News
