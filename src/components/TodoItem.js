import React from 'react'

const TodoItem = ({text, completed, onComplete, onDelete}) => {
  return (
    <li>
      <div style={{display: 'flex', alignItems: "center"}}>
        <span onClick={onComplete}>✓</span>
        <p>{text}</p>
        <span onClick={onDelete}> [X] </span>
        {completed && <h1>~ Done, Yeiii!!!</h1>}
      </div>
      
    </li>
  )
}

export default TodoItem;
