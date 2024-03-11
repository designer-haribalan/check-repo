import { useState, useEffect } from "react";

function Timer(){
  const [count, setCount] = useState(0);

  useEffect(() => {
      console.log("Rendered");
      checkCount();
      // setCount(1);
      setTimeout(() => {
        
        setCount((previousState) => {return previousState+1})
      }, 1000)
  }, [count])  

  function incrementCount(){
    setCount(count+1)
  }

  function checkCount(){
    if(count > 10){
      setCount(1);
    }
  }

  return<>
  <h1> Screen Rendered {count} Times</h1>
  <button onClick={incrementCount}>Increment Count</button>
  </>

}

export default Timer;
