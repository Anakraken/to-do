import React, { useContext } from 'react'
import { TodoContext } from '../hooks/TodoContex'

const TodoCounter = () => {
  const { totalTodos, completedTodos } = useContext(TodoContext);

  return (
    <div>
      <p>Haz Completado: {completedTodos}</p>
      <p>De: {totalTodos} Tareas</p>
    </div>
  )
}

export default TodoCounter;
