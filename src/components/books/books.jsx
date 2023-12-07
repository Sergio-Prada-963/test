import React, { useState, useEffect } from "react"
import axios from "axios"

import Reading from "../../assets/bibliophile-svg-761.svg"
import Reading2 from "../../assets/womenBook2.svg"

import Ranks from "./ranks"
import News from "../news/news"
import Autores from "./autores"
import Reciente from "./reciente"

const Books = () => {
  const [autores, setAutores] = useState([])

  let autores3 = []

  useEffect(() => {
    async function getData() {
      await axios
        .get(`https://rickandmortyapi.com/api/character`)
        .then((response) => {
          setAutores(response.data.results)
        })
        .catch((err) => {
          console.error("ha ocurrido un error", err)
        })
    }
    getData()
  }, [])

  if (autores.length > 0) {
    for (let i = 0; i < 3; i++) {
      autores3.push(autores[i])
    }
  }

  /* datos para los ranks */
  const dataRank = [
    { titulo: "Libreria", rank: 124 },
    { titulo: "Me Gusta", rank: "155 k" },
    { titulo: "Lectores", rank: "8 k" },
    { titulo: "Opiniones", rank: "163 k" },
  ]

  /* datos para reciente */
  const reciente = [
    { name: "Victoria Evans ", text: 'ha comentado en "La Ciudadela"', date: "May 7" },
    { name: "Ethan Wiliams ", text: "ha comenzado a seguirte", date: "May 5" },
    { name: "Nathan Fox ", text: 'le ha gustado "Inolvidable"', date: "May 1" },
    { name: "Megan Walsh ", text: "ha comensado a sequirte", date: "Apr 29" },
  ]

  return (
    <div className='flex flex-row m-4 '>
      <div className='flex flex-col Books'>
        <div className='flex flex-row search'>
          <i className='fa-solid fa-magnifying-glass'></i>
          <input type='text' placeholder='Buscar por libros, personas ó articulos' />
        </div>
        <div className='flex flex-row newBorrador justify-between shadow-xl'>
          <div className='flex flex-col text-white info-borrador'>
            <h3>Hola, Andrés! Tienes ideas sobre un nuevo libro?</h3>
            <p>Vuelve tus libros tendencia mundial!</p>
            <p>Quieres empezar a escribir una ves mas?</p>
            <div>
              <button className='flex items-center justify-center btn-borrador'>
                Crear Borrador <span className='text-3xl font-black ml-3'>+</span>
              </button>
            </div>
          </div>
          <div>
            <img src={Reading} alt='img ilustration' className='w-80' />
          </div>
        </div>
        <div className='flex flex-row mt-5 info-dinamica'>
          <div className='flex flex-col data-1'>
            <div className='flex flex-row justify-between'>
              {dataRank.map((data) => (
                <Ranks data={data} />
              ))}
            </div>
            <div className=' cont-autores shadow-xl'>
              <div className='flex flex-row justify-between nav-autores p-3'>
                <h5>Autores</h5>
                <button>Ver Todo</button>
              </div>
              <div className='autores'>
                {autores3.map((personaje) => (
                  <Autores personaje={personaje} />
                ))}
              </div>
            </div>
          </div>
          <div className='flex flex-col data-2 shadow-xl reciente'>
            <div className='flex flex-row justify-between nav-autores p-3'>
              <h5>Reciente</h5>
              <button>Ver Todo</button>
            </div>
            <div className='cont-reciente flex flex-col justify-between'>
              {reciente.map((e) => (
                <Reciente reciente={e} />
              ))}
            </div>
          </div>
        </div>
        <div className='tips flex flex-row justify-between'>
          <div className='info-tips flex flex-col justify-center'>
            <h3>Andrés, nos gusta tu contenido y queremos darte los siguientes tips:</h3>
            <p>1. Lee los comentarios de tus lectores.</p>
            <p>2. Elije el género que quieres para público.</p>
            <p>3. Busca Siempre a un editor de confianza!</p>
          </div>
          <div>
            <img src={Reading2} alt='img reading book 2' className='w-80' />
          </div>
        </div>
      </div>
      <div className='cont-news'>
        <News />
      </div>
    </div>
  )
}

export default Books
