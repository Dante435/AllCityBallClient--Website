import React from 'react'
import './Fheader.css';

const Fheader = ({title, text}) => {
  return (
<div className='gpt3__features-container__feature'>
      <div className='gpt3__features-container__feature-title'>
        
        <h1>{title}</h1>
        <div/>
      </div>
      {/* <div className='gpt3__features-container_feature-text'>
        <p>{text}</p>
      </div> */}
      
    </div>
  )
}

export default Fheader
