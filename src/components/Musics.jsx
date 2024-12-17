import React from 'react'

const Musics = ({data , buttonHandler, index} ) => {
    const {name, image, artist, added} = data;

    
  return (
    <div className='w-60 h-24 rounded-md flex  items-center p-4 relative pb-10 bg-zinc-200'>
      <div className='rounded-md w-14 h-14 overflow-hidden bg-orange-600'>
        <img className='' src={image} alt="" />
      </div>
      <div className='p-4'>
      <h1 className='font-semibold'>{name}</h1>
      <h6 className='font-semibold text-xs '>{artist}</h6>
      </div>
      <button onClick={()=>buttonHandler(index)} className={`${added === false ? "bg-orange-600" : "bg-teal-600"} absolute rounded-full bottom-0 left-1/2 translate-y-[50%] font-semibold -translate-x-[50%] text-white text-xs px-3 py-1`}>{added ===false? "Add to favourites" : "Added"}</button>
    </div>
  )
}

export default Musics
