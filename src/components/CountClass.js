import React from "react"

class Counting extends React.Component{

  constructor(props){
    super(props);
    this.state = {count : 0};
  }

  render(){

    return( <>
    <h1>Change the count using Class Component{this.state.Count}</h1>
    <p>Count: {this.state.count}</p>
    <button onClick={() => this.setState({count: this.state.count+1})}>Increment</button>
    <button onClick={() => this.setState({count: this.state.count-1})}>Decrement</button>
      </>);

  }

}

export default Counting;