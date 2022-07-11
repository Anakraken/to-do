import React, { useContext, useState } from 'react'
import { TodoContext } from '../hooks/TodoContex';

function TodoForm() {
    const [newTodoValue, setnewTodoValue] = useState('');
    const {
        addTodo,
        setOpenModal
    } = useContext(TodoContext);

    const onChange = (e) => {
        setnewTodoValue(e.target.value);
    };

    const onCancel = () => {

    };

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };
  return (
    <form onSubmit={onSubmit}>
      <label>...</label>
      <textarea 
      value={newTodoValue}
      onChange={onChange}
      placeholder='Cortar cebolla para el almuerzo'
      />
      <div>
      <button type='button' onClick={onCancel}>
        Cancelar
      </button>
      <button type='submit'> Anadir </button>
      </div>
    </form>
  )
}

export default TodoForm;
