import React, { useState } from 'react'
import '../css/ParcelOptions.css'

function ParcelOptions() {
    const [option, setOption]= useState('both')
    
  return (
    <div className="options-main">
      <div className="options">
        <button data-type="single" onClick={(e) => setOption('single')}>
          <img src="/assets/human.svg" alt="h" />
          <span>1</span>
        </button>
        <button
          onClick={(e) => {
            setOption('both');
          }}
        >
          <img src="/assets/human.svg" alt="h" />
          <span>+</span>
          <img src="/assets/parcel.svg" alt="" />
          <span>2</span>
        </button>
        <button
          data-type="other"
          onClick={(e) => {
            setOption('other');
          }}
        >
          <img src="/assets/burger.svg" alt="h" />
          <span>3</span>
        </button>
      </div>

      {option === "both" && <div className="both-form"></div>}
    </div>
  );
}

export default ParcelOptions