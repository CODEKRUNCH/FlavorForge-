import React, { useState, useEffect } from 'react';
import './herocarousel.css';
import Custombutton from './custombutton';

const handleClick = () => {
  alert('Button Clicked!');
};

function Herocarousel() {
  const images = [ "hero2.png"]; // Add your image file names here
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='hero'>
      <div className='heroblk'>
        <br />
        <Custombutton 
          iconsrc="image14.png"
          label="Hot Recipes"
          onClick={handleClick}
          style={{ backgroundColor: 'white', alignSelf: 'flex-Start' }}
        />

        <h1 className='heroheader'>
          Spicy delicious <br /> chicken wings
        </h1>
        <p className='herodesc'>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>

        <div className='Lbutns'>
          <Custombutton 
            iconsrc="btntimer.png"
            label="30 minutes"
            onClick={handleClick}
            style={{ alignSelf: 'flex-Start', backgroundColor: '#C0E4FF' }}
          />

          <Custombutton 
            iconsrc="ForkKnifebtn.png"
            label="Chicken"
            onClick={handleClick}
            style={{ alignSelf: 'flex-Start', backgroundColor: '#C0E4FF' }}
          />
        </div>

        <div className='johnsm'>
          <img src="elpjohn.png" width={60} alt="" />
          <div id='johnsmtxt'>
            <h4>Harry Rothschild</h4>
            <p>15 March 2022</p>
          </div>   
          <Custombutton 
            iconsrc="playcircle.png"
            label="View Recipes"
            onClick={handleClick}
            style={{ marginLeft: '200px', backgroundColor: 'black', color: 'white', padding: '20px' }}
          />
        </div>
        <div className='herocenterimg'>
          <img src="Badge.png" alt="" />
        </div>
      </div>
      <div>
        <img className='heroimg' src={images[currentImageIndex]} alt="Hero" />
      </div> 
    </div>
  );
}

export default Herocarousel;
