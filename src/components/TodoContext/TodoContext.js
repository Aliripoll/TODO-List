import React from "react";
import { useLocalStorage } from "./useLocalStorage";

//SIRVE PARA COMPARTIR EL ESTADO POR TODOS LOS COMPONENTES DE LA APP
const TodoContext = React.createContext();

function TodoProvider(props) {
  //traemos el estado "TODOS" y la función para manejar los TODOS
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  //MANEJO DEL ESTADO
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  //FILTRAR TODOS
  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  //CÓMO GUARDAR ESTADO DE TODOS
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    //PARA ENVOLVER TODA LA APP
    <TodoContext.Provider value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
    }}>
        {props.children}
    </TodoContext.Provider>
  );
}

//SE UTILIZA SI NECESITAMOS INFO DE NUESTRO ESTADO COMPARTIDO
<TodoContext.Consumer></TodoContext.Consumer>;

export { TodoContext, TodoProvider };
