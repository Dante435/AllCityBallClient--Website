import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';
import { Fheader } from '../../components';
const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' >
    <div className='app__aboutus-overlay flex__center'>
      {/* <img src={images.allcitylogo} alt='g letter'/> */}
    </div>
    <div className='app__aboutus-content flex__center'id='about'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'><Fheader title='About Us'/></h1>
        {/* <img src={images.underline1} alt='about_underline1' className='underline1__img'/> */}
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
      <div className='app__aboutus-content_allcitylogo flex__center'>
        <img src={images. allcitylogo} alt='allcitylogo'/>
      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'><Fheader title='Our History'/></h1>
        {/* <img src={images.underline1} alt='about_underline1' className='underline1__img'/> */}
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
