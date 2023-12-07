import React, { useState, useEffect } from "react"

const Cards = ({ data }) => {
  const [img1, setImg1] = useState("")
  const [img2, setImg2] = useState("")

  useEffect(() => {
    let Img1
    let Img2
    try {
      Img1 = require(`../../assets/${data.img1}`)
      if (Img1) setImg1(Img1)
      Img2 = require(`../../assets/${data.img2}`)
      if (Img2) setImg2(Img2)
    } catch (error) {
      Img1 = require("../../assets/404.jpg")
      setImg1(Img1)
      Img2 = require("../../assets/404.jpg")
      setImg2(Img2)
    }
  }, [data])

  return (
    <div className='bg-white card-new w-80'>
      <div>
        <img src={img1} alt='img' className='w-80' />
      </div>
      <div className='data-card'>
        <h6>{data.titulo}</h6>
        <p>{data.text}</p>
        <div className='flex flex-row data-card-user'>
          <div>
            <img src={img2} alt='img' />
          </div>
          <div className='flex flex-col'>
            <h5>{data.nombre}</h5>
            <p>{data.fecha}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
