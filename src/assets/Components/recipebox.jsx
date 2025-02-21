import React from 'react';
import './recipelist.css';

function Recipebox({ imagesrc, text, tags }) {
  return (
    <div className='recipebox'>
      <img src={imagesrc || "hero3.webp"} alt="Recipe" />
      <p>{text || "Big and juicy Wagyu Beef Cheeseburger"}</p>
      <div className="tags">
        {tags && tags.map((tag, index) => <span key={index} className="tag">{tag}</span>)}
      </div>
    </div>
  );
}

export default Recipebox;
