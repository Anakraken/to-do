import { useContext } from 'react'
import TodoCounter from '../components/TodoCounter';
import TodoItem from '../components/TodoItem';
import CreateTodoButton from '../components/CreateTodoButton';
import TodoList from '../components/TodoList';
import TodoSearcher from '../components/TodoSearcher';
import { TodoContext } from '../hooks/TodoContex';
import Modal from '../components/modales';
import TodoForm from '../components/TodoForm';

const AppUi = () => { 
  const {
      error, 
      loading, 
      searcherTodos, 
      completeTodo, 
      deleteTodo,
      openModal,
      setOpenModal
  } = useContext(TodoContext);

  return (
    <>
      <TodoCounter />
        <h2>Has completado x todos de y</h2> 
        <TodoSearcher />
        <TodoContext.Consumer>
          {() => (
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

        {!!openModal && (
            <Modal>
              <p><strong>Teletrasportacioooooon</strong></p>\
              <h3>{searcherTodos[0]?.text}</h3>
              <TodoForm />
            </Modal>
        )}

        <CreateTodoButton 
        setOpenModal={setOpenModal}
        />
    </>
  );
};

export default AppUi;
