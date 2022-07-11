import React from 'react'

const TodoCounter = ({totalTodos,completedTodos}) => {
  return (
    <div>
      <p>Haz Completado: {completedTodos}</p>
      <p>De: {totalTodos} Tareas</p>
    </div>
  )
}

export default TodoCounter;
