import React from 'react';

import {SubHeading , }from '../../components';
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
      <h2>Newsletter</h2>
      <div/>
       <h1 className='headtext__cormorant'>Subscribe to Our Newsletter</h1>
       <p className='p__opensans'>And never miss latest Updates!</p>
    </div>
    <div className='app__newsletter-input flex__center'>
      <input type="email" placeholder='Enter your e-mail address' />
      <button className='custom__button'>Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
