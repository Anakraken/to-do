import React from 'react';
import { TodoProvider } from '../hooks/TodoContex';
import AppUi from './AppUi';

function App() {
  
  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;
