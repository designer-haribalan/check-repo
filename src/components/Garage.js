import Car from "./Car";
import Parking  from "./Parking";

function Garage(){
  // const brand = "Lamborgini";
  // const color = "Yellow";

  const GarageStatus = true;

  const carInfo = {color: "yellow", brand:"ferrari"};
  const GarageInfo = {location: "madurai", near:"thirumangalam"};

  const carList =[
    {color:"red", brand: "ferrari"},
    {color:"white", brand: "honda city"},
    {color:"black", brand: "skoda"}
  ];

  const numberList = [
    1,2,3,4,5,6,7,8
  ];

  return(
    <>
    <h1>Car can stay in my place</h1>
    {/* <Car carInfo={carInfo} /> */}
    <Parking GarageInfo={GarageInfo}/>
    {/* <Car brand={brand}  color={color}/> */}

    {GarageStatus? <h3>Garage is open</h3>: <h3>Garage is closed</h3>}
    <ul>
      { carList.map( (carInfo) => <li key={carInfo.brand}> <Car carInfo={carInfo}/></li>)}
    </ul>

    <ul>
      {numberList.map( (e, index) => <p key={index} >{e}</p>)}
    </ul>

    </>
  );
}

export default Garage;