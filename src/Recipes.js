import React from 'react'

function Recipes({title , image , calories}) {


  return (
    <div>
        <div className="container">
            <h1>{title}</h1>
            <img src={image} alt="" />
            <div>{calories}</div>
        </div>
    </div>
  )
}

export default Recipes