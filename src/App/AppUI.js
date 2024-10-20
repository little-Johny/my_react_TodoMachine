import { TodoTitle } from '../TodoTitle/index';
import { TodoSearch } from '../TodoSearch/index';
import { TodoList } from '../TodoList/index';
import { TodoItem } from '../TodoItem/index';
import { CreateTodoButton } from '../CreateTodoButton/index';
import { TodosLoading } from '../TodosLoading/index';
import { TodosError } from '../TodosError/index';
import { EmptyTodos } from '../EmptyTodos/index';
import { TodoContext } from '../TodoContext';
import { Modal } from "../Modal";
import { TodoForm } from '../TodoForm';
import React from 'react';





function AppUI() {
    const {
        loading,
        error,  
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
    } = React.useContext(TodoContext);

    return(
    <>{/* podemos escribir <React.Fragment> o simplemente <> */}
        <TodoTitle/>

        <TodoSearch/>

        <TodoList>
            {/* Manejo de estado de carga en el render */}
            {loading && (
                <>
                    <TodosLoading/>
                    <TodosLoading/>
                    <TodosLoading/>
                </>
            )}
            {/* Manejo de estado de error en el render */}
            {error && <TodosError/>}
            {/* Manejo de  estado de array vacio en el render*/}
            {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}


            {searchedTodos.map(todo => {
                return(
                    <TodoItem 
                    key={todo.text} 
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                    />
                )
            }  )}
        </TodoList>

        <CreateTodoButton/>

        {openModal &&(
            <Modal>
                <TodoForm/>
            </Modal>
        )}
    </> )
}

export {AppUI};