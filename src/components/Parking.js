import React  from "react";


class Parking extends React.Component{

  render(){
    const {GarageInfo} = this.props; // is used to mention when we are passed the data into class component
    const {location, near} = GarageInfo;
    return(
      <h3>You can park your car {location} and near to {near}</h3>
    );
  }

}

export default Parking;