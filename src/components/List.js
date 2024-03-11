import { useState } from "react";

function List(){

  const [List, setList] = useState([]);
  const [count, setCount] = useState(1);

function addItem(){
   const itemName = "Item" + count;
   setList((previousState)=> {return [...previousState, itemName]});
   setCount((previousState) => {return(previousState+1)})
}

  return <>

          <h1>List of Items</h1>
          <button onClick={addItem}>Add Item</button>       
          <ul>
            {
              List.map((el, index) => {return <li key={index}>{el}</li>})
            }
          </ul>  
        </>

}

export default List;