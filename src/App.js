import React , {useState} from "react";
import TodoLists from "./TodoLists";

const App = () =>{

  const [inputList , setInputList] = useState('')
  const [items ,setItems] = useState([])

  const itemEvent = (e) =>{
    setInputList(e.target.value)
  }

  const listOfItems = () =>{
    setItems((oldItem)=>{
      return [...oldItem , inputList]
    })
    setInputList('')
  }
 

  const deleteFunc = (id) =>{ 
    console.log('deleted'+id)
    setItems((oldItems)=>{
      return oldItems.filter((arrayElem,index)=>{
        return index !== id
      })
    })
}
  return(
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>Todo List</h1>
        <br />
        <input type="text" placeholder="Add an item" value={inputList} onChange={itemEvent} />
        <button onClick={listOfItems}>+</button>

        <ol style={{listStyleType:"none"}}>
          {/* <li>{inputList}</li> */}
          {
            items.map((itemVal,index)=>{
            return <TodoLists key={index} id={index} text={itemVal} onSelect={deleteFunc}/>
            })
          }
        </ol>

      </div>
    </div>
  )
}

export default App;