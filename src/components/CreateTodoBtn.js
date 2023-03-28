import React from "react";
import '../styles/CreateTodoBtn.css';

function CreateTodoBtn(props) {
   


    const onClickButton = (msg) => {
        alert(msg);
    };

    return (
        <button 
        className="CreateTodoBtn"
        onClick={() => onClickButton('Aquí se debería abrir el modal')}>
          +
        </button>
    );
}

export { CreateTodoBtn };