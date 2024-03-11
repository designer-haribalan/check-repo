import React from "react";

class Scooty extends React.Component{

  constructor(){
    super();
    this.state = {color: "red", model:"Honda"}
  }

  render(){
    return <>
    <h3>The Color of the Scooty is: {this.state.color} and the model is: {this.state.model}</h3>
    <button onClick={()=>this.setState((previousState) => {return {...previousState ,color: "blue" }})}> Change Color</button>
    </>
  } 

}

export default Scooty;