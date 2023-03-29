import React from "react";
import '../styles/CreateTodoBtn.css';
import { TodoContext } from "./TodoContext/TodoContext";

function CreateTodoBtn(props) {
       const { openModal, setOpenModal } = React.useContext(TodoContext);

       const onClickButton = (msg) => {
        setOpenModal(!openModal);
    
    };

    return (
        <button
        className="CreateTodoBtn"
        onClick={onClickButton}>
          +
        </button>
    );
}

export { CreateTodoBtn };