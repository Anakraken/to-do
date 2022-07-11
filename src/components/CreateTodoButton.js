import React from 'react'

const CreateTodoButton = () => {
  const onClick = () => {
    alert('click')
  };

  return (
    <button onClick={onClick}>
      +
    </button>
  )
}

export default CreateTodoButton;
