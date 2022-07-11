import React, {createContext,  useState} from 'react';
import useLocalStorage from '../useLocalStorage';

const TodoContext = createContext()

const TodoProvider = ({children}) => {
    // const [todos, saveTodos] = useLocalStorage('TODOS_V1', []); ejemplo para arrays
  const {
    item: todos, 
    saveItem: saveTodos, 
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = useState('');
  const [openModal, setOpenModal] = useState(false);
  
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searcherTodos = [];
  if(!searchValue.length >= 1) {
    searcherTodos = todos;
  } else {
    searcherTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);

    })
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
        completed: false,
        text,
    });

    saveTodos(newTodos);
  };

  const completeTodo = (id) => {
    const todoIndex = todos.findIndex( todo => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    console.log(id + "COMPLETADO!!!");
    saveTodos(newTodos);
    // todos[todoIndex] = {
    //   text: todos[todoIndex].text,
    //   completed: true,
    // }
  };

const deleteTodo = (id) => {
  const todoIndex = todos.findIndex( todo => todo.id === id);
  const newTodos = [...todos];
  newTodos.splice(todoIndex, 1);
  console.log(id + "ELIMINADO!!!");
  saveTodos(newTodos);
};

  return (
    <TodoContext.Provider value={{
        error,
      loading,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searcherTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      addTodo
    }}>
      {children}
    </TodoContext.Provider>
  )
}

export {TodoContext, TodoProvider};
