import React from 'react';
import { TodoContext } from './TodoContext/TodoContext';
import '../styles/TodoForm.css'

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo, 
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    

    return (
        <form onSubmit={onSubmit}> 
            <label>Escribe tu nueva tarea</label>
           {/*  La etiqueta textarea sirve para no poner límite a lo que escriba el usuario */}
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder='Hacer la compra'
            />
            <div className='TodoForm-btnContainer'>
                <button 
                    className='TodoForm-btn TodoForm-btn--cancel'
                    type='button'
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    className='TodoForm-btn TodoForm-btn--add'
                    type='submit'
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };