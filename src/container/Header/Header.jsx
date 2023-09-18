import React from 'react';
import{ images, vid2, vid3, vid1 } from '../../constants';
import './Header.css';
import { Fheader, SubHeading } from '../../components';


// const vidRef = React.useRef();

const Header = () => (
  <div className='app__header app__wrapper section__padding'id='home'>
  <div>

  </div>
  <div className='app__wrapper_info'>
    <div className='sub'>
     <SubHeading  title='Home of Athletes ' />
    </div>
     
    <h1 className='app__header-h1'>Home Of Greatness</h1>
      <p className='p__opensans' style={{ margin: '2rem 0'}}>Our mission is simple yet powerful: to help you elevate your game to new heights and achieve your professional basketball aspirations.
      </p>
    <button type='button' className='custom__button'>
      Explore Menu
    </button>
  </div>

  <div className='app__wrapper_img' id='smcontent'>
    <div className='vids-tp'>
      <video className= 'vid_z-index-tp' src={vid2} width="300" height="400" autoPlay loop muted playsInline  />
      <video className= 'vid_z-index-tp2' src={vid1} width="300" height="400" autoPlay loop muted playsInline  />
    </div>
  
    <spam className= 'img_z-index-center'>
      <img src={images.welcome} alt='header img' />
    </spam>

    <div className='vids_bt'>
      <spam className= 'vid_z-index-bt'>
        <video src={vid3} width="300" height="400" autoPlay loop muted playsInline  />
      </spam>
      <spam className= 'vid_z-index-bt2'>
        <video src={vid2} width="300" height="400" autoPlay loop muted playsInline  />
      </spam>`
    </div>
     
  
  </div>
   
    
  </div>
);

export default Header;
