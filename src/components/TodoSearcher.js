import React from 'react'

const TodoSearcher = ({searchValue, setSearchValue}) => {

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
