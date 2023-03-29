import React from 'react';
import '../styles/TodoCounter.css';
import { TodoContext } from './TodoContext/TodoContext';


function TodoCounter() {
   const { totalTodos, completedTodos } = React.useContext(TodoContext);

    return (
        <h2 className="TodoCounter" >Has completado {completedTodos} de {totalTodos} tareas</h2>
    );
}


export { TodoCounter };