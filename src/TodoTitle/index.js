import React from 'react';
import './TodoTitle.css';
import { TodoContext } from '../TodoContext';


function TodoTitle(){
    const {
        completedTodos,
        totalTodos
    }= React.useContext(TodoContext)

    return(
    <h1 
        className='TodoTitle'
    >
        {totalTodos === 0 || completedTodos === totalTodos ? (
            "Parece que no tienes todos pendientes"
        ):(
            <>
                Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> Todos 
            </>
        )}
    </h1>
    );
}

export {TodoTitle};