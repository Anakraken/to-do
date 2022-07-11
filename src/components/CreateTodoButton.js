import React from 'react'

const CreateTodoButton = ({setOpenModal}) => {
  const onClick = () => {
    alert('click');
    setOpenModal(prevState => !prevState);
  };

  return (
    <button onClick={onClick}>
      +
    </button>
  )
}

export default CreateTodoButton;
