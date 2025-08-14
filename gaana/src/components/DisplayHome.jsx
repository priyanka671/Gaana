import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import Albumsitems from './Albumsitems'
import { songsData } from '../assets/assets'
import Songsitems from './Songsitems'

const DisplayHome = () => {
  return (
    <>
      < Navbar/>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto'>
          {albumsData.map((items,index)=>(<Albumsitems key={index} name={items.name} desc={items.desc} id={items.id} image={items.image} />))}
        </div>
      </div>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Today's Biggest hits</h1>
        <div className='flex overflow-auto'>       
        {songsData.map((items,index)=>(<Songsitems key={index} name={items.name} desc={items.desc} id={items.id} image={items.image} />))}

         
        </div>
      </div>
    </>
  )
}

export default DisplayHome
