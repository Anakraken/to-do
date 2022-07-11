import React, { useContext } from 'react'
import { TodoContext } from '../hooks/TodoContex';

const TodoSearcher = () => {
  const {searchValue, setSearchValue} = useContext(TodoContext);

    const onSearchValueChange = (e) => {
        setSearchValue(e.target.value);
    }
    
  return (
    <>
      <input 
      onChange={onSearchValueChange}
      placeholder="Cebolla" 
      />
      <p>{searchValue}</p> 
    </>
    )
}

export default TodoSearcher;
