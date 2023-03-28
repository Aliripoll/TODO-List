import React from 'react';
import '../styles/App.css';
import { TodoProvider } from './TodoContext/TodoContext';
import { AppUI } from './AppUI';



function App() {


  //RETURN
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
