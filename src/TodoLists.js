import React from 'react'

const TodoLists = (props) => {


    return (
    <>
    <div style={{display:'flex'}}>
        <i onClick={()=>{
            {props.onSelect(props.id)}
        }}><b>-</b></i>
    <li style={{marginLeft:'50px'}}>{props.text}</li>
    </div>
    </>
    )}

export default TodoLists