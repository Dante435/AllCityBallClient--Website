import React, { useEffect } from 'react'
import {images} from'../../constants';
import'./preloader.css';
import {preLoaderAnim} from '../../animations/index.js';
const PreLoader= () => {

useEffect(()=>{
  preLoaderAnim()
})

  return (
    <div className='preloader'>
      <div className='img-animation scale-in-center'>
        <img src={images.logowhiteBTA} alt='header img' />
      </div>

      
    </div>
      

  )
}

export default PreLoader
