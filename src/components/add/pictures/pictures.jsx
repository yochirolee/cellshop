import React from "react";
import "./picture.css";



export default function Pictures({ picture }) {


  return (
    <>
      {picture ? (
        <div className="product-picture">
          <div className={`picture ${picture}`}></div>
        </div>
      ) : (
        <div className="product-picture">
        <div className='picture picture-home'></div>
      </div>
      )}
    </>
  );
}
