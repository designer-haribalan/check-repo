
function Car(props){

  // const {brand, color} = props;
  const carInfo = props;
  const {brand, color} = carInfo;

  return(
    <div>
    <h1>Hi Im a {color} {brand} car function</h1>
    </div>
  );

}

export default Car;