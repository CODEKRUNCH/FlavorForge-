import React from 'react';
import { useEffect } from 'react';
import './custombutton.css'
function Custombutton({iconsrc,label,onClick,style}) {
    return (
          <button className='custombutton' onClick={onClick} style={style}><img src={iconsrc} alt="" />  {label}</button>
    
);
}
export default Custombutton; // Correct export
