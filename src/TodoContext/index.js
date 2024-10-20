import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();


function TodoProvider ({
    children
}) {
     /* llamando los elementos retornados del custom hook  */
    const {
        item : todos, 
        saveChanges , 
        loading, 
        error
    } = useLocalStorage('TODOCITOS_V1', []);

    /* estado de componente search y list */
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    
    /* estados derivados de todos */
    const completedTodos = todos.filter(
        todo => !!todo.completed
    ).length;

    const totalTodos = todos.length;


    const searchedTodos = todos.filter(
        (todo) => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        /* return todo.text.toLowerCase().includes(searchValue.toLowerCase()); */
        return todoText.includes(searchText);
        }
    );

    /* Crear funcion de addTodo */
    const addTodo = (text) =>{
        const newTodos = [...todos];


        newTodos.push({
            text,
            completed:false,
        });
        saveChanges(newTodos);
    }



    const completeTodo = (text) => {
        const newTodos = [...todos];

        const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text 
        );

        newTodos[todoIndex].completed = ! newTodos[todoIndex].completed;
        
        saveChanges(newTodos);
    }

    const deleteTodo = (text) =>{
        const newTodos = [...todos];

        const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
        );

        newTodos.splice(todoIndex, 1);
        
        saveChanges(newTodos);
    }
    console.log('render app');


    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}




export {TodoContext, TodoProvider}