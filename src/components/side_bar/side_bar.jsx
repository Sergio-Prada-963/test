import React from "react"

const SideBar = () => {
  return (
    <div className='flex flex-col justify-between h-[70%] text-white w-[100%]'>
      <div className='flex items-center justify-center'>
        <div className='flex items-center justify-center p-4 rounded-xl bg-border-book shadow-md'>
          <i className='fa-solid fa-book  icon-book'></i>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <ul className='grid gap-3'>
          <li className='text-center'>Inicio</li>
          <li className='text-center'>Libros</li>
          <li className='text-center'>Editores</li>
          <li className='text-center'>Lectores</li>
        </ul>
      </div>
      <div className='flex items-center justify-center'>
        <div className='flex items-center justify-center px-5 rounded-xl bg-border-book shadow-md'>
          <button className='flex items-center p-1.5'>
            Crear <span className='text-2xl font-black ml-3'>+</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SideBar
