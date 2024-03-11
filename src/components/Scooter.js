import React, { useState } from "react";

function Scooter(){

  const [scooter, setScooter] = useState(
    {
      color: "purple",
      brand: "tvs",
      model: "scooty-strek",
      year: "2020"
    }
  );

  function updateValues(){
    setScooter(previousState => {
      return {...previousState, color:"red", brand:"yamaha"}
    })
  }


  return(
    <div>
      <h1>The Brand Details</h1>
      <p>color: {scooter.color}</p>
      <p>brand: {scooter.brand}</p>
      <p>model: {scooter.model}</p>
      <p>year: {scooter.year}</p>

      <button onClick={updateValues}>Click Here</button>

    </div>
  )

}

export default Scooter;