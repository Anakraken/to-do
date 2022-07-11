import React from 'react'
import TodoCounter from '../components/TodoCounter';
import TodoItem from '../components/TodoItem';
import CreateTodoButton from '../components/CreateTodoButton';
import TodoList from '../components/TodoList';
import TodoSearcher from '../components/TodoSearcher';
import { TodoContext } from '../hooks/TodoContex';

const AppUi = () => (
    <>
      <TodoCounter />
        <h2>Has completado x todos de y</h2> 
        <TodoSearcher />
        <TodoContext.Consumer>
          {({
            error, 
            loading, 
            searcherTodos, 
            completeTodo, 
            deleteTodo
          }) => (
            <TodoList>
              {loading && <p>cargandeishon</p>}
              {error && <p>errooor, don't panic</p>}
              {(!loading && !searcherTodos.length) && <p>crea tu primer todo</p>}
              {
                searcherTodos.map(todo => (
                  <TodoItem 
                  key={todo.id} 
                  text={todo.text} 
                  completed={todo.completed}
                  onComplete={()=>completeTodo(todo.id)}
                  onDelete={()=>deleteTodo(todo.id)}
                  />
                ))
              }
            </TodoList>
          )}
        </TodoContext.Consumer>
        <CreateTodoButton />
    </>
  );

export default AppUi;
