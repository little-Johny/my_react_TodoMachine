import React from 'react';
import './TodoItem.css'
import {CompleteIcon} from  './TodoIcon/CompleteIcon/index';
import {DeleteIcon} from  './TodoIcon/DeleteIcon/index';

function TodoItem({
    text,
    completed,
    onComplete,
    onDelete
}) {
    return(
        /* contenedor del componente */
    <li className="TodoItem">
        
        <CompleteIcon
            completed={completed}
            onComplete={onComplete}
        />
        <p className={`TodoItem-p ${completed ? "TodoItem-p--complete" : ""}`}>
            {text}
        </p>
        <DeleteIcon
            onDelete={onDelete}    
        />
        
    </li>
    );
}


export {TodoItem} ;