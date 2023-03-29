import React from "react";
import '../styles/TodoSearch.css';
import { TodoContext } from "./TodoContext/TodoContext";
//import { useState } from "react";

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return (
        <input 
            placeholder = "hacer la compra" 
            className="TodoSearch"
            value={searchValue}
            onChange={onSearchValueChange}
            />
        );
}

export { TodoSearch };