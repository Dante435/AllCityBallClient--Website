import React from 'react';

import {images} from'../../constants';

const SubHeading = ({title}) => (
  <div style={ {marginBotton:'1rem'}}>
    <p className='p__cormorant'> {title}</p>
    <img src={images.underline1} alt='underline1' className='underline1__img'/>
  </div>
);


export default SubHeading 


