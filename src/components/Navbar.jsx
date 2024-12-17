import React from 'react'

const Navbar = ({data}) => {
  return (
    <div className='font-bold text-xs flex justify-between items-center px-6 py-5'>
      <h1>Orange</h1>
      <div className='flex px-2 py-1 bg-orange-600 gap-3 text-white rounded-md '>
        <h2>Favourites</h2>
        <h2>{data.filter(item=> item.added).length}</h2>
      </div>
    </div>
  )
}

export default Navbar
